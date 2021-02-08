let n = 0
const string = `
body{
  background-color: #ffe600;
}
.skin {
  position: relative;
}
.nose {
  border: 10px solid;
  border-color: #000 transparent transparent transparent;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -10px;
  z-index: 2;
}
.nose .yuan {
  /* border: 1px solid blue; */
  position: absolute;
  top: -20px;
  left: -10px;
  width: 20px;
  height: 10px;
  overflow: hidden;
}
.nose .yuan::before{
  content: '';
  display: block;
  width: 30px;
  height: 45px;
  position: absolute;
  left: -5px;
  top: 4px;
  border-radius:50% 50% 0% 0%;
  background-color: #000;
}
.eye {
  border: 3px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  margin-left: -32px;
  top: 160px;
  border-radius: 50%;
  background-color: rgb(46, 46, 46);
}
.eye::after {
  content: "";
  display: block;
  border: 3px solid #222;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  left: 6px;
  top: 2px;
  background-color: #fff;
}
.eye.left {
  transform: translateX(-120px);
}
.eye.right {
  transform: translateX(120px);
}
.mouth{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 220px;
  margin-left: -100px;
}
.mouth .up .lip{
  width: 90px;
  border: 1px solid ;
  height: 30px;
  border-width: 3px;
  background-color: #ffe600;
  z-index: 1;
}
.mouth .up .lip.left{
  border-radius: 10% 10% 30% 150% ;
  position: absolute;
  left: 12px;
  top: 0;
  transform: rotateZ(-25deg);
}
.mouth .lip.left::after{
  content: '';
  display: block;
  width: 96px;
  height: 30px;
  position: absolute;
  top: -18px;
  left: -2px;
  transform: rotateZ(16deg);
  background-color: #ffe600;
}
.mouth .up .lip.right{
  border-radius: 10% 10% 150% 30%;
  position: absolute;
  right: 12px;
  top: 0;
  transform: rotateZ(25deg);
}
.mouth .lip.right::after{
  content: '';
  display: block;
  width: 96px;
  height: 30px;
  /* border: 1px solid blue; */
  position: absolute;
  top: -18px;
  right: -2px;
  transform: rotateZ(-16deg);
  background-color: #ffe600;
}
.mouth .down {
  /* border: 1px solid blue; */
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
}
.mouth .down .yuan1{
  border: 3px solid black;
  height: 500px;
  width: 150px;
  position: absolute;
  left: 50%;
  bottom: 16px;
  margin-left: -75px;
  border-radius: 10% 10% 50% 50% ;
  background-color: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
  height: 200px;
  width: 200px;
  position: absolute;
  left: 50%;
  bottom: -60px;
  margin-left: -100px;
  border-radius: 50% ;
  background-color: #ff485f;
}
.cheek{
  border: 3px solid #000;
  width: 88px;
  height: 88px;
  position: absolute;
  top: 270px;
  left: 50%;
  margin-left: -44px;
  border-radius: 50%;
  background-color: #ff0000;
}
.cheek.left{
  transform: translateX(-160px);
}
.cheek.right{
  transform: translateX(160px);
}`

let i = setInterval(()=>{
    demo1.innerHTML = string.substr(0, n)
    demo2.innerText = string.substr(0, n)
    if(n < string.length){
        n += 1
    }else{
        window.clearInterval(i)
        return
    }
    console.log(n, string.substr(0, n))
}, 10)