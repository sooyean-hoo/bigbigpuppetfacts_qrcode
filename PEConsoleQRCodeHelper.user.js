// ==UserScript==
// @name         PEConsoleQRCodeHelper
// @namespace    http://tampermonkey.net/
// @version      0.1.0.0.1
// @description  For TamperMonkey or GreaseMonkey ... a helper to make the QR Code display nicer in the Puppet Enterprise Console
// @author       Hoo Sooyean 何書淵
// @connect      *
// @connect     *
// @include     *://*puppet*/*
// @match       *://*puppet*/*
// @run-at       document-end
// @copyright    2022, Sooyean (https://github.com/sooyean-hoo/bigbigpuppetfacts_qrcode)
// @icon         https://www.google.com/s2/favicons?sz=64&domain=opsworks-cm.io
// @grant        none
// @license MIT
// @updateURL    https://openuserjs.org/meta/Sooyean-hoo/PEConsoleQRCodeHelper.meta.js
// @downloadURL  https://openuserjs.org/install/Sooyean-hoo/PEConsoleQRCodeHelper.user.js
// ==/UserScript==

(function() {
    'use strict';

    setTimeout( f=>{

    	if (location.href.indexOf('/inventory/node') ==  -1 ) return ;
    	if (location.href.indexOf('facts') ==  -1 ) return ;

    	if ($("a[href *= '/inventory/node/' ]").length == 0 ) return ;
    	if ($("a[href *= facts]").length == 0 ) return ;

        let nodes=document.querySelectorAll(".node-fact-value")

        for( let index=0; index < nodes.length ; index++){
            let n = nodes[index];
            if ( n.innerText.startsWith( '█' ) ){
                n.style.lineHeight='1.2ch' ;
            }
        }
    }, 5000)
    // Your code here...
})();