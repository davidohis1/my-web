var Anime = document.getElementById('row4');
var Graphic = document.getElementById('row5');
var Video = document.getElementById('row6');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');


function change1(){
    Anime.style.display = 'block';
    Graphic.style.display = 'none';
    Video.style.display = 'none';
    btn1.style.backgroundColor = 'red';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'transparent';
}
function change2(){
    Anime.style.display = 'none';
    Graphic.style.display = 'flex';
    Video.style.display = 'none';
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = 'red';
    btn3.style.backgroundColor = 'transparent';
}
function change3(){
    Anime.style.display = 'none';
    Graphic.style.display = 'none';
    Video.style.display = 'block';
    btn1.style.backgroundColor = 'transparent';
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'red';
}
