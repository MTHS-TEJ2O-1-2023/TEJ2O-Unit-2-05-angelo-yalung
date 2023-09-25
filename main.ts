/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Sep 2023
 * This program shows the current temperature in Kelvin
*/

basic.clearScreen()
basic.pause(1000)

let temperature = input.temperature()

input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showNumber(input.temperature())
    basic.showNumber(input.temperature() + 273.15)
    basic.showString('Kelvin')
})
