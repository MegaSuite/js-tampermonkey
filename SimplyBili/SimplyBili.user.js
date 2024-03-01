// ==UserScript==
// @name         SimplyBili
// @namespace    https://github.com/MegaSuite/js-tampermonkey
// @version      0.1
// @description  remove the button at bottom left corner of the avatar in the video page of Bilibili
// @author       Konrad Gerrens
// @match        https://www.bilibili.com/video/*
// @icon         https://github.com/MegaSuite/js-tampermonkey/blob/master/SimplyBili/Bilibili_logo.png?raw=true
// ==/UserScript==

(function() {
    'use strict';
  function rm_btn(selector) {
    // Get the node to delete
    let nodeToDelete = document.querySelector(selector);

    // Check if the node exists
    if (nodeToDelete) {
      // Remove the node
      nodeToDelete.remove();
      console.log(`remove [${selector}]`);
    } else {
      console.log(`[${selector}] can't be found`);
    }
  }


  rm_btn('.default-btn.new-charge-btn');
  rm_btn('.default-btn.old-charge-btn');
})();