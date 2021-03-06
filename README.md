# Ionic-Beacon

## Setup
Make sure you have the latest version of Node.js and npm (automatically installed with Node.js)
You can verify if you have node and npm installed by running 
`node -v` and `npm -v`. 
To update npm, run 
`npm install npm@latest -g`. 
If you do not have Node.js and npm, follow the steps outlined in https://nodejs.org/en/download/.

## 
Then, download the latest version of Ionic and Cordova by running `npm install -g ionic cordova`. 
Also download Angular using `npm install -g @angular/cli`.

## Plugins
This app uses several Cordova plugins, including the datepicker, BLEPlugin, and Email Composer.

1. Run `ionic cordova plugin add cordova-plugin-datepicker` and `npm install @ionic-native/date-picker`.
2. Run `ionic cordova plugin add cordova-plugin-email-composer` and `npm install @ionic-native/email-composer`.
3. Run `ionic cordova plugin add cordova-plugin-ble-central` and `npm install @ionic-native/ble`.

## Chart.js
Run `npm install chart.js --save`.

## Server
After running `ionic serve` in the project folder, navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

If this is unsuccessful, you may also need to install an Angular dependency by running `npm install --save-dev @angular-devkit/build-angular`.

## Configure Platforms
Before displaying the app, you'll need to download whichever platform you want to use to display the app. For iOS, run 
`ionic cordova platform add ios` in Terminal. Run `ionic cordova platform add android` for Android.

## Integrating with Cordova
Since this app is designed to be cross-platform, you can use Cordova to display whichever app version you want (iOS or Android). 

Run `ionic cordova build ios` or `ionic cordova build android`, depending on which platform you want to use.

## Viewing on a Device
You can run `ionic cordova emulate` in the terminal (automatically builds) to see the app on either an iOS or an Android device. 

NOTE: Cordova plugins (including Bluetooth) will NOT work on an emulator, so make sure to run "MyApp.xcodeproj" in XCode on an iOS device to test native functionality. 
