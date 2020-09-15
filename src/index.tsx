import React from 'react'
import ReactDOM from 'react-dom'
import {I18nextProvider} from 'react-i18next'
import i18n from './i18n'
import Asteroids from './components/Asteroids'
import './index.css'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Asteroids />
  </I18nextProvider>,
  document.getElementById('root')
)