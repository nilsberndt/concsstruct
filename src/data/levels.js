
/* eslint-disable */

/* note: eslint is disabled here due to create-react-app configuration limitations 
and needing multiline support for these preset messages to be tolerable in editor. */

export const BOSS_MESSAGE = 
[
//LEVEL 0 BOSS MESSAGE
"<h2>So you want to be an apprentice?</h2><br><b>I'm the boss!</b> <i>Con<b>css</b>truction</i> is hard work, \
but I know you're capable!<br><br>On this crew we build \
structures using <a href=\
'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' \
target='_blank'><b>&#060;html&#062;</b></a> <code>BldgPart</code>s as our \"frame\", \
and then fill out the building design details with <a href=\
'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics' \
target='_blank'><b>CSS</b></a> <code>class</code> styles.\
<br><br>...Don't worry if you haven't worked with these tools and materials \
before - you'll mainly need to use logic and memory to complete our jobs according to \
plan, and I'll be here to help get you up to speed along the way.\
<br><br>The first job is basic stuff - <b>prepare a vacant lot</b>. If you complete this, \
you can join the crew!<br><br>See that glowing green square? That’s some fresh \
<code>grass</code>. We need you to prepare the \
<code>vacant</code> lot (the yellow one with the crane on it) to match. \
<br><br>To prepare the lot with <code>grass</code>, change \
the class <code>ground--vacant</code> to <code>ground--grass</code> \
in the <b>\"blueprint\"</b> above me.",

//LEVEL 1 BOSS MESSAGE
"<h2>Heavy lifting required...</h2><br><b>We’re starting to build a house now!</b><br><br>\
I built the first one for you on <code>lot--1</code>.<br><br> \
Now we need you to prepare <code>lot--2</code> with some <code>grass</code>. Then add a \
<code>brick</code> <code>foundation</code> like the example.\
<br><br>...And pay attention to the pieces of the completed house on \
<code>lot--1</code> - you'll need to know them later!",

//LEVEL 2 BOSS MESSAGE
"<h2>Finish that house!</h2><br><b>Whew... I'm getting tired!</b><br><br>\
I'll need you to finish up the house on <code>lot--2</code> on your own.<br><br> \
You should be able to figure it out by using <code>lot--1</code> \
as an example. Pay attention to the order that you add <code>BldgPart</code>s - \
they need to be stacked correctly.<br><br>We build from the ground <b>up</b>. The order goes:<br>\
<code>ground</code>&#062;<code>foundation</code>&#062;<code>stairs</code>&#062;<code>main</code>\
&#062;<code>roof</code>&#062;(<code>decor</code>)... the <code>decor</code>ation is optional. \
some buildings may require it later on, but not now. Make sure to paint the house the right colors. \
We use <code>red</code>, <code>green</code>, and <code>blue</code> paint!",

//LEVEL 3 BOSS MESSAGE
"<h2>A day at the office...</h2><br>Houses are one thing we build, but \
we also take on retail and commercial (<code>office</code>) contracts.<br><br>\
You need to build out this commercial row by completing the partial \
sites on <b>all</b> <code>lot</code>s - and make sure to put some <code>asphalt</code> \
down for these!<br><br><b>Good luck... I know you have what it takes!</b>",

//LEVEL 4 BOSS MESSAGE
"<h2>Vandals!</h2><br>Some troublemakers messed up all the buildings on this block! \
Let's be honest though... these buildings needed some work anyway.<br><br>\
Clean up the <code>graffiti</code> and <code>damage</code>, \
and replace it with some <code>flowers</code> and <code>trees</code>.<br><br>\
You'll also need to repaint and complete the missing <code>BldgPart</code>s.\
<br><br><b>Have fun!</b>",

//LEVEL 5 BOSS MESSAGE
"<h2>A real town!</h2><br>You've done great work, and I trust your skills are up to par. \
I want to give you a final test before I send you off on your own.<br><br>\
Let's see if you can combine the pieces you've learned thus far (and some new ones!) \
to build a full town block from scratch.<br><br>This block features some of our newest \
materials: white <code>marble</code> and <code>wood</code> foundations and stairs, and \
modern <code>office-glass</code> main and roof styles!\
<br><br>If you can complete this job, you're ready for anything!",

//EXPERT LEVEL BOSS MESSAGE
"<h2>You're on your own now!</h2>Don't let me down! \
Here are some helpful keywords in case you forgot your training:<br>\
<code>grass</code> <code>asphalt</code> <code>concrete</code> <code>brick</code> \
<code>marble</code> <code>wood</code> <code>house</code> <code>office</code> \
<code>ground</code> <code>foundation</code> <code>stairs</code> <code>main</code> \
<code>roof</code> <code>red</code> <code>green</code> <code>blue</code> <code>glass</code> \
<code>damage</code> <code>graffiti</code> <code>flowers</code> <code>trees</code><br><br>\
Go for the high score!",
];

export const EXAMPLE_ROW =
[
//LEVEL 0 EXAMPLE ROW
"<BldgPart class='lot--2 ground--grass'></BldgPart>",

//LEVEL 1 EXAMPLE ROW
"<BldgPart class='lot--1 ground--grass'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 ground--grass'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n",

//LEVEL 2 EXAMPLE ROW
"<BldgPart class='lot--1 ground--grass'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 ground--grass'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--2 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--2 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 roof--house-red'></BldgPart>\n",

//LEVEL 3 EXAMPLE ROW
"<BldgPart class='lot--1 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
<BldgPart class='lot--1 roof--office-red'></BldgPart>\n\
\n\
<BldgPart class='lot--2 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--2 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--2 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--2 main--office-blue'></BldgPart>\n\
<BldgPart class='lot--2 roof--office-blue'></BldgPart>\n\
\n\
<BldgPart class='lot--3 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--3 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--3 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--3 main--office-green'></BldgPart>\n\
<BldgPart class='lot--3 roof--office-green'></BldgPart>\n",

//LEVEL 4 EXAMPLE ROW
"<BldgPart class='lot--1 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--office-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--office-blue'></BldgPart>\n\
<BldgPart class='lot--1 decor--trees'></BldgPart>\n\
\n\
<BldgPart class='lot--2 ground--grass'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--2 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--2 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 roof--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 decor--flowers'></BldgPart>\n\
\n\
<BldgPart class='lot--3 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--3 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--3 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--3 main--office-red'></BldgPart>\n\
<BldgPart class='lot--3 roof--office-green'></BldgPart>\n\
<BldgPart class='lot--3 decor--trees'></BldgPart>\n",

//LEVEL 5 EXAMPLE ROW
"<BldgPart class='lot--1 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\
<BldgPart class='lot--1 decor--flowers'></BldgPart>\n\
\n\
<BldgPart class='lot--2 ground--grass'></BldgPart>\n\
<BldgPart class='lot--2 foundation--wood'></BldgPart>\n\
<BldgPart class='lot--2 stairs--wood'></BldgPart>\n\
<BldgPart class='lot--2 main--office-glass'></BldgPart>\n\
<BldgPart class='lot--2 roof--office-glass'></BldgPart>\n\
<BldgPart class='lot--2 decor--trees'></BldgPart>\n\
\n\
<BldgPart class='lot--3 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--3 foundation--marble'></BldgPart>\n\
<BldgPart class='lot--3 stairs--marble'></BldgPart>\n\
<BldgPart class='lot--3 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--3 roof--office-blue'></BldgPart>\n\
<BldgPart class='lot--3 decor--flowers'></BldgPart>\n",
];

export const USER_ROW = 
[
//LEVEL 0 USER ROW
"<BldgPart class='lot--2 ground--vacant'></BldgPart>",

//LEVEL 1 USER ROW
"<BldgPart class='lot--1 ground--grass'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 ground--vacant'></BldgPart>\n",

//LEVEL 2 USER ROW
"<BldgPart class='lot--1 ground--grass'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 ground--grass'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n",

//LEVEL 3 USER ROW
"<BldgPart class='lot--1 ground--vacant'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
<BldgPart class='lot--1 roof--office-red'></BldgPart>\n\
\n\
<BldgPart class='lot--2 ground--vacant'></BldgPart>\n\
\n\
<BldgPart class='lot--3 ground--grass'></BldgPart>\n",

//LEVEL 4 USER ROW
"<BldgPart class='lot--1 ground--asphalt'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
<BldgPart class='lot--1 roof--office-blue'></BldgPart>\n\
<BldgPart class='lot--1 decor--graffiti'></BldgPart>\n\
\n\
<BldgPart class='lot--2 ground--vacant'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--2 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--2 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 decor--damage'></BldgPart>\n\
\n\
<BldgPart class='lot--3 ground--vacant'></BldgPart>\n\
<BldgPart class='lot--3 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--3 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--3 main--office-green'></BldgPart>\n\
<BldgPart class='lot--3 decor--graffiti'></BldgPart>\n",

//LEVEL 5 EXAMPLE ROW
"<BldgPart class='lot--1 ground--vacant'></BldgPart>\n\
\n\
<BldgPart class='lot--2 ground--vacant'></BldgPart>\n\
\n\
<BldgPart class='lot--3 ground--vacant'></BldgPart>\n",
];


