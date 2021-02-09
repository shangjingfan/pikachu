

import string from './css' //string名字自定义

const player = {
  id: null,
  speed: 100,
  n: 1,
  ui:{
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": 'pause',
    "#btnPlay": 'play',
    "#btnSlow": 'slow',
    "#btnNormal": 'normal',
    "#btnFast": 'fast',
  },
  init: () => {
    player.ui.demo2.innerText = string.substr(0, player.n)
    player.ui.demo1.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) { //防手贱操作，别人改原型
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.ui.demo1.innerHTML = string.substr(0, player.n)
    player.ui.demo2.innerText = string.substr(0, player.n)
    if (player.n < string.length) {
      player.n += 1
    } else {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.speed)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.speed = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.speed = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.speed = 0
    player.play()
  },
}

player.init()
