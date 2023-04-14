"use strict";
const path = require('path');

const output = {
  home: (req, res)=>{
    res.sendFile(path.join(__dirname, "/../../views/home/voca/build/index.html"));
  },
}

const process = {
  words: (req, res)=>{
    console.log("db로 데이터 요청")
    fetch(`http://localhost:3001/words?day=${req.params.day}`)
    .then(r=>{
      return r.json();
    })
    .then((r)=>{
      res.json(r);
    })
  },
}

module.exports = {
  output, 
  process
};