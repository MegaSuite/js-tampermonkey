// ==UserScript==
// @name         Click Stimulator
// @namespace    https://github.com/MegaSuite/js-tampermonkey
// @version      1.0
// @description  stimulate clicking login button in the login page of HUST Network
// @author       Konrad Gerrens
// @match        http://172.18.18.60:8080/*
// @match        http://172.18.18.61:8080/*
// @icon         https://github.com/MegaSuite/js-tampermonkey/blob/master/ClickStimulator/HUST-logo.png?raw=true
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Function to prompt user to set both username and password
    function setCredentials() {
        const credentials = prompt("Please enter your username and password, separated by a comma (e.g., user,password):",
                                   GM_getValue('username', '') + ',' + GM_getValue('password', ''));
        if (credentials !== null) { // check if user did not press cancel
            const [username, password] = credentials.split(',');

            if (username && password) {
                GM_setValue('username', username.trim());
                GM_setValue('password', password.trim());
                alert("Credentials are set. Username: " + username);
            } else {
                alert("Invalid input. Please enter both username and password separated by a comma.");
            }
        }
    }

    // Function to clear stored username and password
    function clearStoredData() {
        GM_deleteValue('username');
        GM_deleteValue('password');
        alert("Stored username and password have been cleared.");
    }

    // Register menu commands
    GM_registerMenuCommand("Set Credentials", setCredentials);
    GM_registerMenuCommand("Clear Stored Data", clearStoredData);

    // Retrieve stored username and password
    const username = GM_getValue('username', '');
    const password = GM_getValue('password', '');

    // Function to fill the username input field
    function fillUsername() {
        const usernameInput = document.getElementById('username');
        if (usernameInput) {
            usernameInput.value = username;
        }
    }

    // Function to fill the password input field
    function fillPassword() {
        const passwordInput = document.getElementById('pwd');
        if (passwordInput) {
            passwordInput.value = password;
        }
    }

    // Function to click the login button
    function clickLogin() {
        const button = document.getElementById("loginLink");
        if (button) {
            button.click();
        }
    }

    // Function to close the window
    function closeWindow() {
        if (username && password) { // Only close the window if both username and password are set
            const userAgent = navigator.userAgent;
            if (userAgent.indexOf('Firefox') !== -1 || userAgent.indexOf('Chrome') !== -1) {
                window.location.replace('about:blank');
            } else {
                window.opener = null;
                window.open('', '_self');
            }
            window.close();
        }
    }

    // Fill username and password, then click the button
    fillUsername();
    fillPassword();
    setTimeout(clickLogin, 1500);
    setTimeout(closeWindow, 3000);

})();
