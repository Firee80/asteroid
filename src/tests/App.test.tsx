import React from 'react'
import {render} from '@testing-library/react'
import Asteroids from '../components/Asteroids'

// Test does not work as render fails because of ReactGlobe
test('renders powered by', () => {
  const {getByText} = render(<Asteroids />)
  const linkElement = getByText(/Powered by/i)
  expect(linkElement).toBe(true)
})
