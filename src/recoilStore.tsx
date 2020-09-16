import {atom, selector} from 'recoil'
import moment from 'moment'
import _ from 'lodash'
import config from 'config'
import {IAsteroidStyles, IAsteroid, IAsteroidDates} from 'types'

const defaultStyles : IAsteroidStyles = {
  padding: '0',
  selectedAsteroidIndex: -1
}

export const asteroidStylesState = atom({
  key: 'asteroidStyles',
  default: defaultStyles
})

export const asteroidDataAsyncState = selector({
  key: 'asteroidDataAsync',
  get: async () => {
    const {apiKey: configApiKey, endDate, startDate} = config
    const urlParamApiKey = (new URL(window.location.href)).searchParams.get('apiKey')
    const apiKey = urlParamApiKey ?? configApiKey

    const getUrl = (start: string, end: string) => {
      return `https://api.nasa.gov/neo/rest/v1/feed?api_key=${apiKey}&start_date=${start}&end_date=${end}`
    }
    const getDates = (start: string, end: string) => {
      const startDate = moment(start, 'YYYY-MM-DD')
      const endDate = moment(end, 'YYYY-MM-DD')
      const months = endDate.diff(startDate, 'months') + 1

      return Array.from({length: months}).map((item, index) => {
        const start = startDate.clone().add(index, 'month')
        const end = start.clone().add(1, 'week')
        return {
          start: start.format('YYYY-MM-DD'),
          end: end < endDate
            ? end.format('YYYY-MM-DD')
            : endDate.format('YYYY-MM-DD')
        }
      })
    }

    const dates = getDates(startDate, endDate)
    const urls = dates.map(({start, end}) => getUrl(start, end))
    const responses = urls.map(async url => {
      const response = await fetch(url)
      return await response.json()
    })
    return await Promise.all(responses)
  }
})

export const asteroidsByMonth = selector({
  key: 'asteroidsByMonth',
  get: ({get}) => {
    const asteroids = get(asteroidDataAsyncState)
    const asteroidsData = _.flatMap(asteroids, item =>
          _.map(item['near_earth_objects'], (data, date) =>
            _.map(data, asteroid => {
              const asteroidData = {date, ...asteroid}
              const dataWithProps =_.pick(asteroidData, ['name', 'close_approach_data', 'estimated_diameter'])
              return {
                date: moment(date, 'YYYY-MM-DD').format('YYYY-MM'),
                name: _.get(dataWithProps, 'name', '').replace('(', '').replace(')', ''),
                diameter: Math.floor(_.get(dataWithProps, 'estimated_diameter.meters.estimated_diameter_min', 0)),
                distance: Math.floor(_.get(dataWithProps, 'close_approach_data.[0].miss_distance.lunar', 0))
              }
            })
          ))
    const allAsteroids = _.flatMap(asteroidsData)
    const asteroidGroupedByMonth = _.groupBy(allAsteroids, 'date')
    const resultAsteroids :IAsteroid[] = _.map(asteroidGroupedByMonth, items => {
      const biggest = _.maxBy(items, item => item.diameter)
      return {
        date: _.get(biggest, 'date', ''),
        name: _.get(biggest, 'name', ''),
        diameter: `${_.get(biggest, 'diameter', 0)}`,
        distance: `${_.get(biggest, 'distance', 0)}`,
        padding: `${Math.floor(Math.random() * 50)}px`
      }
    })
    return _.sortBy(resultAsteroids, asteroid => asteroid.date).reverse()
  }
})

export const asteroidDates = selector({
  key: 'asteroidDates',
  get: ({get}) => {
    const asteroids = get(asteroidsByMonth) ?? []
    const result: IAsteroidDates = {
      startDate: _.get(_.minBy(asteroids, asteroid => moment(asteroid.date, 'YYYY-MM')), 'date', ''),
      endDate:  _.get(_.maxBy(asteroids, asteroid => moment(asteroid.date, 'YYYY-MM')), 'date', ''),
    }

    return result
  }
})
