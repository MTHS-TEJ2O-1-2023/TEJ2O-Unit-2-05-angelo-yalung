/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Sep 2023
 * This program shows the current temperature in Kelvin
*/

basic.clearScreen()
basic.pause(1000)

let temperature: number
let kelvin: number

input.onButtonPressed(Button.A, function () {
  // actual caluclation
  temperature = input.temperature()
  kelvin = temperature + 273.15
  kelvin = Math.round(kelvin)

  // text
  basic.clearScreen()
  basic.showString('Temperature in Kelvin is:' + kelvin.toString())
})
