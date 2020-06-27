// ==UserScript==
// @name         Mission Marker Mod
// @namespace    https:///
// @version      1.0
// @description  Adds glow to mission marker
// @author       MisteryMan
// @match        ://leitstellenspiel.de/*
// @match        ://*.leitstellenspiel.de/*
// @match        ://missionchief.com/*
// @match        ://*.missionchief.com/*
// @match        ://meldkamerspel.com/
// @match        ://*.meldkamerspel.com/
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    $("<style type='text/css'> " +
        ".leaflet-marker-icon[src*='red'], .leaflet-marker-icon[src*='rot']{ filter: drop-shadow(0px 0px 8px red);}" +
        ".leaflet-marker-icon[src*='yellow'], .leaflet-marker-icon[src*='gelb']{ filter: drop-shadow(0px 0px 8px yellow);} " +
        ".leaflet-marker-icon[src*='green'], .leaflet-marker-icon[src*='gruen']{ filter: drop-shadow(0px 0px 8px green);} " +
        "</style>").appendTo("head");
    var original_func = missionMarkerAdd;
    icon_resize();
	missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        setTimeout(function() { icon_resize(); }, 1200);
    }
    async function icon_resize() {
        var icons = "";
        var icons = document.querySelectorAll("img[src*='red'], img[src*='rot'], img[src*='yellow'], img[src*='gelb'], img[src*='green'], img[src*='gruen']");
        //console.log(icons);
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.height = "28px";
            icons[i].style.width = "24px";
        }
    };
})();