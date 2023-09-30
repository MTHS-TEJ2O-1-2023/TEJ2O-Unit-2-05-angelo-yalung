"""
Created by: Angelo Yalung
Created on: Sep 2023
This module return percentage of light.
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        temp = temperature
        kelvin = temperature + 273
        display.show(str(kelvin))
