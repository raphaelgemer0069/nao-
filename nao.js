// criar bolinha
let raio =7.5;
let xBolinha = 100;
let yBolinha = 200;
let diametro =vraio * 2;

//velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

// minha raquete
let xRaquete = 5;
let yRaquete = 150;

// raquete oponente
let xRaqueteoponente = 585;
let yRaqueteoponente = 150;

// placar 
let meusPontos = 0;
let pontosOponete = 0;

// dificuldade

let dificuldade ="normal";
let trilha,ponto,raquetada;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup (){
    createCanvas(600,400);
    trilha.loop();
}

function draw(){
  background(0);
  movimentoBolinha();
  raquetes(xraquete,yraquete);
  raquetes(xraqueteoponente,yraqueteoponente);
  npc(dificuldade);
  
  if(keyIsDown(UP_ARROW)){
    yraquete -=  10}
  
  if(keyIsDown(DOWN_ARROW)){
    yraquete -=  10}
  
  if(xBolinha-raio< xraquete+ 10 & yBolinha-raio<yraquete+90 & ybolinha + raio >yraquete){
    velocidadexbolinha *=-1;
    raquete.play()}
  
  if(xBolinha+raio> xRAqueteOponente & ybolinha - raio < yRaqueteOponete +90 & yBolinha + raio > yRAqueteOponente){velocidadeXBolinha *=1;
raquetada.play()}
  textSize(18);
  textAlign(CENTER);
  fill(color(255,0,233));
  rect(150,10,40,20);
  fill(255);
  text(pontosOponete,470,26);
  
  if(xBolinha>595){
    meusPontos += 1;
    ponto.play()
  }
  if(xBolinha<10){
    pontosOponete +=1;
    ponto.play()
 
  }
}
function  movimentoBolinha(){
  circle(xbolinha,ybolinha,diametro);
  
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  if(xbolinha + raio > width || xbolinha-raio <0){
    velocidadexbolinha *= -1
 
  }
   if(ybolinha + raio > height|| ybolinha-raio <0){
    velocidadeybolinha *= -1}}
function raquetes(xraquete,yraquete){
  rect(xRaquete,yRaquete,10,90);
  
}
function npc(){
  var nivel =30;
  if(dificuldade==="Facil"){
    nivel = 100;
  }
  if(dificuldade ===-"Normal"){
    nivel = 30
  }
  let velocidadeYRaqueteOponente =  yBolinha - yRaqueteOponete - 10 / 2;
  yRaqueteOponente += velocidadeYRaqueteOponente - nivel;
}
