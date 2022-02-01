function getAnnual(){
  /* first number var=wtin */
  wtin = document.getElementById("weekly-takehome-income").value;

/* second number var=yr */
/* weeks in a year */
let y = 52;

/* let w = 4; */

/* yearly income formula */
let n = wtin * y;

/* 20% of income savings */
/* let s = n * .2; */

/* 5% of income for savings */
let s = n * .05;

/* 15% of income for investing */
let i = n * .15;

/* weekly investing goal */
let wig = i / y; 
/*  */

/* dividing savings goal by 52 weeks */
let w = s / y;
/*  */
  document.getElementById("annual-income").innerHTML = '<b>$'+n + '</b> is your average yearly take home income. <br><br>';

document.getElementById("weekly-savings").innerHTML = 'Building savings by paying yourself <b>5%</b>, or <b>$'+w+'</b> a week... would add up to '+ '<b>$' +s+'</b> at the end of one year. <br><br>';


  document.getElementById("annual-savings").innerHTML = 
  'If you set aside <b>15%</b> of your annual income, you will have '+' <b>$'+i + '</b> to invest at the end of one year.<br><br> Weekly, you would have to invest <b>$' + wig + '</b> to meet the goal of investing <b>15%</b> of your yearly income.<br><br> '
  ; 

 
/*   m = document.getElementById(monthly-expenses).value;
 */



}
