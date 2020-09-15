export interface IAsteroidStyles {
  padding: string,
  selectedAsteroidIndex: number
}

export interface IAsteroid {
  date: string,
  name: string,
  diameter: string,
  distance: string,
  padding: string
}

export interface IAsteroidDates {
  startDate: string,
  endDate: string
}

export interface IAsteroid {
  date: string,
  name: string,
  diameter: string,
  distance: string,
  padding: string
}

export interface IPlanetContainerProps {
  height?: number,
  width?: number
}

export interface IPlanetProps {
  texture?: string,
  planetClass?: string,
  rotationSpeed?: number,
  enableGlow?: boolean,
  styles?: object,
  height?: number,
  width?: number
}

export interface IRowData {
  col1: string,
  col2: string,
  col3: string,
  col4: string,
  selected?: boolean,
  onClick?: () => void
}
