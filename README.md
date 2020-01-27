# _Evangelion Pilot Sync (Beep Boop)_

#### _Arrays and Looping Code Review Project for Epicodus 1.24.20_

#### By _**Jeremy Kale Padot**_

## Description

_Web application that takes a user inputed number and returns it ( 0 to user number) with exceptions: Beeps and boops will replace numbers in selected areas styled in Neon Genesis theme._

## Setup/Installation Requirements

* _If using gh-pages simply click the clink to view 
https://kalepadot.github.io/epicodus-code-review-3-beep-boop/
* For Devs, open git repository and copy repo link https://github.com/kalepadot/epicodus-code-review-3-beep-boop.git . In your terminal desktop clone the repo and open in text editor. $ git clone repo link, $ git cd to repo, $ code . (this will open in your text editor) VSCode suggested._
* You will need to download bootstrap vr 3.3.7 and add to your css file. download from the website adn drag to your folder. Make sure your link and script are up to date with applied bootstrap. Same rules apply to jQuery ver 3.4.1. apply to your scrips above js/scripts.js
* There are links to google fonts in the head

_Specs_
* The program returns a range of numbers from 0 to the users input number
  * input: "4"
  * output: "0,1,2,3,4"
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
  * input: "11"
  * output: "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
  * input: "2"
  * output: "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "i'm sorry, Dave. I'm afraid I can't do that."
  * input: "3"
  * output: "i'm sorry, Dave. I'm afraid I can't do that."
* The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I cant do that."
  * input: "13" 
  * output: "I'm sorry, Dave. I'm afraid I can't do that."
* The number 21 should be replaced with "Boop".
  * input: "21"
  * output: "Boop".
* The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  * input: "32"
  * output: "I'm sorry, Dave. I'm afraid I can't do that."
* The user should be able to enter a new number and see new results over and over again.

## Known Bugs

_Currently working issue where if user inputs text an error message will apear and toggle center gif img. Once bug worked, will add a reset button or if correct user input is used, will take you back to the main page with correct results._

## Support and contact details

_Contact for bug reports and issues/questions:
Jeremy Kale Padot:  jeremy@padot.us _

## Technologies Used

* Macbook Pro
* VSCode
* Bootstrap ver 3.7
* jQuery 3.4.1
* html
* CSS
* JavaScript
* Terminal 
* Google fonts ( see link in head )

### License



Copyright (c) 2020 **_Jeremy Kale Padot / Epicodus -for educational purposes only_**