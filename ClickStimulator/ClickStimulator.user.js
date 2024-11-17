// ==UserScript==
// @name         Click Stimulator
// @namespace    https://github.com/MegaSuite/js-tampermonkey
// @version      0.3
// @description  stimulate clicking login button in the login page of HUST Network
// @author       Konrad Gerrens
// @match        http://172.18.18.60:8080/*
// @match        http://172.18.18.61:8080/*
// @icon         https://github.com/MegaSuite/js-tampermonkey/blob/master/ClickStimulator/HUST-logo.png?raw=true
// ==/UserScript==

(function(){
    'use strict';
    function clickAna()
    {
        let button = document.getElementById("loginLink");
        button.click()
    }

    function closeWindow()
    {
        let userAgent = navigator.userAgent
        if (userAgent.indexOf('Firefox') !== -1 || userAgent.indexOf('Chrome') !== -1)
        {
            window.location.replace('about:blank')
        }
        else
        {
            window.opener = null
            window.open('', '_self')
        }
        window.close()
    }

    setTimeout(clickAna,1500);
    setTimeout(closeWindow,3000);
})();
