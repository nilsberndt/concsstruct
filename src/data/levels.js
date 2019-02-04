
/* eslint-disable */

/* note: eslint is disabled here due to create-react-app configuration limitations 
and needing multiline support for these preset messages to be tolerable in editor. */

export const BOSS_MESSAGE = 
[
//LEVEL 0 BOSS MESSAGE
"<h2>Welcome to the crew!</h2><br> I'm the boss! On this crew we build with \
<a href='https://www.w3schools.com/Html/html_intro.asp' target='_blank'><b>HTML</b></a> \
and <a href='https://www.w3schools.com/Css/css_intro.asp' target='_blank'><b>CSS</b></a> \
classes. You'll need to use logic and memory to complete our jobs according to plan.\
<br><br>The first job is basic stuff - <b>zone a vacant lot</b>. \
<br><br>See that glowing green square? That’s a residential \
(<code>house</code>) lot. You need to make the \
<code>vacant</code> lot (the yellow one with the crane on it) match. \
<br><br>To zone the lot for a residential <code>house</code>, change \
the class <code>type--zone-vacant</code> to <code>type--zone-house</code> \
in the <b>\"blueprint\"</b> above me.",

//LEVEL 1 BOSS MESSAGE
"<h2>Heavy lifting required...</h2><br>We’re starting to build a house now! \
I built the first one for you on <code>lot-1</code>.<br><br> \
Now we need you to zone <code>lot-2</code> for a <code>house</code>. Then add a \
<code>BuildingPiece</code> of <code>type--base-brick</code> like the example.\
<br><br>...And pay attention to the pieces of the completed house on \
<code>lot-1</code> -<br>you'll need them later!",

//LEVEL 2 BOSS MESSAGE
"<h2>Finish that house!</h2><br>Whew.. I'm getting tired! \
I'll need you to finish up the house on <code>lot-2</code> on your own.<br><br> \
You should be able to figure it out by using <code>lot-1</code> \
as an example. Pay attention to the order that you add <code>BuildingPiece</code>s, \
because they need to be stacked in the correct order. Make sure to paint the house \
the correct colors, too! <br><br>...We don't want any customer complaints, after all!",

//LEVEL 3 BOSS MESSAGE
"<h2>A day at the office...</h2><br>Houses are one thing we build, but \
we also take on commercial <code>office</code> contracts. \
You need to build this commercial row by completing the partial \
sites on all lots - and make sure they're zoned correctly!\
<br><br>Good luck, I know you have what it takes!",

//LEVEL 4 BOSS MESSAGE
"<h2>Vandals!</h2><br>Some troublemakers defaced all the buildings on this block! \
Let's be honest though... these buildings need some work anyway. \
Go ahead and clean all the graffiti off and replace it with some <code>flowers</code>.\
<br><br>You'll also need to repaint and complete the missing \
<code>BuildingPiece</code>s. Have fun!",

//LEVEL 5 BOSS MESSAGE
"<h2>A real town!</h2><br>You've done great work, and I trust your skills are up to par. \
I want to give you a final test before I send you off on your own. Let's see if you can \
combine the pieces you've learned thus far to build a full town block from scratch.\
<br><br>If you can complete this job, you're ready for anything!",
];

export const EXAMPLE_ROW =
[
//LEVEL 0 EXAMPLE ROW
"<BuildingPiece class='area--lot-2 type--zone-house'></BuildingPiece>",

//LEVEL 1 EXAMPLE ROW
"<BuildingPiece class='area--lot-1 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-house-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-house-green'></BuildingPiece>\n\n\
<BuildingPiece class='area--lot-2 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--base-brick'></BuildingPiece>\n",

//LEVEL 2 EXAMPLE ROW
"<BuildingPiece class='area--lot-1 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-house-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-house-green'></BuildingPiece>\n\n\
<BuildingPiece class='area--lot-2 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--main-house-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--roof-house-red'></BuildingPiece>\n",

//LEVEL 3 EXAMPLE ROW
"<BuildingPiece class='area--lot-1 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-office-red'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-office-red'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-2 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--main-office-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--roof-office-blue'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-3 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--stairs-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--main-office-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--roof-office-green'></BuildingPiece>\n",

//LEVEL 4 EXAMPLE ROW
"<BuildingPiece class='area--lot-1 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-office-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-office-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--decoration-flowers'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-2 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--stairs-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--main-house-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--roof-house-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--decoration-flowers'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-3 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--main-office-red'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--roof-office-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--decoration-flowers'></BuildingPiece>\n",

//LEVEL 5 EXAMPLE ROW
"<BuildingPiece class='area--lot-1 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-office-red'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-house-red'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--decoration-flowers'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-2 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--main-house-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--roof-house-green'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-3 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--stairs-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--main-office-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--roof-office-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--decoration-flowers'></BuildingPiece>\n",
];

export const USER_ROW = 
[
//LEVEL 0 USER ROW
"<BuildingPiece class='area--lot-2 type--zone-vacant'></BuildingPiece>",

//LEVEL 1 USER ROW
"<BuildingPiece class='area--lot-1 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-house-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-house-green'></BuildingPiece>\n\n\
<BuildingPiece class='area--lot-2 type--zone-vacant'></BuildingPiece>\n",

//LEVEL 2 USER ROW
"<BuildingPiece class='area--lot-1 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-house-green'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-house-green'></BuildingPiece>\n\n\
<BuildingPiece class='area--lot-2 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--base-brick'></BuildingPiece>\n",

//LEVEL 3 USER ROW
"<BuildingPiece class='area--lot-1 type--zone-vacant'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-office-red'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-2 type--zone-vacant'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-3 type--zone-house'></BuildingPiece>\n",

//LEVEL 4 USER ROW
"<BuildingPiece class='area--lot-1 type--zone-office'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--stairs-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--main-office-red'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--roof-office-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-1 type--decoration-graffiti'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-2 type--zone-house'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--base-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--stairs-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--main-house-blue'></BuildingPiece>\n\
<BuildingPiece class='area--lot-2 type--decoration-graffiti'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-3 type--zone-vacant'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--base-stone'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--stairs-brick'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--main-office-red'></BuildingPiece>\n\
<BuildingPiece class='area--lot-3 type--decoration-graffiti'></BuildingPiece>\n",

//LEVEL 5 EXAMPLE ROW
"<BuildingPiece class='area--lot-1 type--zone-vacant'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-2 type--zone-vacant'></BuildingPiece>\n\
\n\
<BuildingPiece class='area--lot-3 type--zone-vacant'></BuildingPiece>\n",
];


