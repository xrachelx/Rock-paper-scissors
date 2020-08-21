let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result > p");
const rockdiv=document.getElementById("r");
const paperdiv=document.getElementById("p");
const scissorsdiv=document.getElementById("s");
//caching the DOM
function getcompchoice()
{
  const choices=["r","p","s"];
  const randomnumber=Math.floor(Math.random()*3);
  return choices[randomnumber];
}
function convert(letter)
{
  if(letter=="r") return "Rock";
  if(letter=="p") return "Paper";
   return "scissors";
}
function win(u,c)
{
  userscore++;
  userscore_span.innerHTML=userscore;
  compscore_span.innerHTML=compscore;
  const smallcomp="comp".fontsize(3).sup();
  const smalluser="user".fontsize(3).sup();
result_p.innerHTML=`${convert(u)}${smalluser} beats ${convert(c)}${smallcomp} YOU WIN`;
}
function lose(u,c)
{
  compscore++;
  userscore_span.innerHTML=userscore;
  compscore_span.innerHTML=compscore;
  const smallcomp="comp".fontsize(3).sup();
  const smalluser="user".fontsize(3).sup();
result_p.innerHTML=`${convert(u)}${smalluser} is beaten by ${convert(c)}${smallcomp} YOU lose`;

}
function draw(u,c)
{

  userscore_span.innerHTML=userscore;
  compscore_span.innerHTML=compscore;
result_p.innerHTML="DRAW";
}

function game(userchoice)
{
  const computerchoice=getcompchoice();
  switch(userchoice+computerchoice)
  {
  case "rs":
  case "pr":
  case "sp":
  win(userchoice,computerchoice);
  break;
  case "sr":
  case "rp":
  case "ps":
  lose(userchoice,computerchoice);
  break;
  case "rr":
  case "pp":
  case "ss":
  draw(userchoice,computerchoice);
  break;
  }
}


function main()
{

 rockdiv.addEventListener("click",function(){
  game("r");
 })
 paperdiv.addEventListener("click",function(){
  game("p");
 })
 scissorsdiv.addEventListener("click",function(){
  game("s");
 })
}

main();
