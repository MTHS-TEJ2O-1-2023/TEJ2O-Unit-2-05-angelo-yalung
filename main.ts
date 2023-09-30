/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Sep 2023
 * This program shows the current temperature in Kelvin
*/

basic.clearScreen()
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
  basic.showString('The temp is')
  basic.showNumber(input.temperature())
let temperature = input.temperature()

  // actual caluclation
  basic.showString('Degrees Celsius, and the temperature in Kelvin is')
  basic.showNumber(temperature + 273)
  basic.showString('Kelvin')
})
