"use strict";function isMobile(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}$(window).on("beforeunload",function(){$(window).scrollTop(0)}),$(document).ready(function(){var e=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"}}),n=document.querySelectorAll("section.scroll-panel"),t=[3,6,9],o=180;isMobile()&&(o=230);for(var a=1;a<n.length-2;a++)!function(n){var a=n+1;if($("#slide"+(n+1)+" .content-container").addClass("stay-fixed"),-1===t.indexOf(a)){var s=(new TimelineMax).fromTo("#slide"+a+" .content-container",2,{opacity:0,scale:.8},{opacity:1,scale:1,ease:Sine.easeIn},0).fromTo("#slide"+(a-1)+" .content-container",3,{opacity:.8,scale:.75},{opacity:0,scale:.5,ease:Power4.easeOut},0).to("#slide"+a+" .content-container",3,{css:{opacity:1,scale:1},ease:Quad.easeInOut}).to("#slide"+a+" .content-container .down-element",2,{css:{y:"90%",scale:1.2,opacity:0},ease:Quad.easeInOut}).to("#slide"+a+" .content-container",3,{css:{opacity:.8,scale:.75},ease:Quad.easeInOut});new ScrollMagic.Scene({triggerElement:"#slide"+a,duration:o+"%",triggerHook:"onEnter"}).setPin("#slide"+a).setTween(s).on("start",function(){$("#slide"+a+" .content-container").addClass("content-show")}).addTo(e)}}(a);for(var a=0;a<t.length;a++)!function(n){var a=t[n];console.log("curIndex",a);var s=(new TimelineMax).fromTo("#slide"+a+" .content-container",2,{opacity:0,scale:.8},{opacity:1,scale:1,ease:Sine.easeIn},0).fromTo("#slide"+(a-1)+" .content-container",3,{opacity:.8,scale:.6},{opacity:0,scale:.5,ease:Power4.easeOut},0).to("#slide"+a+" .content-container",3,{css:{opacity:1,scale:1},ease:Quad.easeInOut}).to("#slide"+a+" .content-container .sub-group, #slide"+a+" h2",2,{css:{y:"-20%",scale:.9},ease:Quad.easeInOut}).to("#slide"+a+" .content-container",2,{css:{opacity:.8,scale:1},ease:Quad.easeInOut});new ScrollMagic.Scene({triggerElement:"#slide"+a,duration:o+"%",triggerHook:"onEnter"}).setPin("#slide"+a).setTween(s).on("start",function(){$("#slide"+a+" .content-container").addClass("content-show")}).addTo(e)}(a);$("#slide14 .content-container").addClass("stay-fixed");var s=(new TimelineMax).fromTo("#slide14 .content-container",2,{opacity:0,scale:.8},{opacity:1,scale:1,background:"#FFC543",ease:Sine.easeIn},0).fromTo("#slide13 .content-container",2,{opacity:.25,scale:.5},{opacity:0,scale:.5,ease:Power4.easeOut},0).to("#slide14 .content-container",3,{css:{opacity:1,scale:1},ease:Quad.easeInOut}).to("#slide14 .content-container .main-img-overlay",2,{css:{y:"50%",scale:1.3,opacity:.6},ease:Quad.easeInOut}).to("#slide14 .content-container",1,{css:{opacity:0,background:"white"},ease:Quad.easeInOut});new ScrollMagic.Scene({triggerElement:"#slide14",duration:"270%",triggerHook:"onLeave"}).setPin("#slide-end").setTween(s).on("start",function(){$("#slide14 .content-container").addClass("content-show")}).addTo(e)});