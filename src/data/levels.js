
/* eslint-disable */

/* note: eslint is disabled here due to create-react-app configuration limitations 
and needing multiline support for these preset messages to be tolerable in editor. */

export const BOSS_MESSAGE = 
[
//LEVEL 0 BOSS MESSAGE
"<h2>Welcome to the crew!</h2><br><b>I'm the boss!</b><br><br>On this crew we build with <a href=\
'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' \
target='_blank'><b>&#060;html&#062;</b></a> as our framing, and then we fill it out with <a href=\
'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics' \
target='_blank'><b>CSS</b></a> \
<code>class</code> styles. Don't worry if you haven't worked with these before! \
You'll mainly need to use logic and memory to complete our jobs according to plan...\
<br><br>The first job is basic stuff - <b>zone a vacant lot</b>. \
<br><br>See that glowing green square? That’s a residential \
(<code>house</code>) lot. We need you to make the \
<code>vacant</code> lot (the yellow one with the crane on it) match. \
<br><br>To zone the lot for a <code>house</code>, change \
the class <code>zone--vacant</code> to <code>zone--house</code> \
in the <b>\"blueprint\"</b> above me.",

//LEVEL 1 BOSS MESSAGE
"<h2>Heavy lifting required...</h2><br><b>We’re starting to build a house now!</b><br><br>\
I built the first one for you on <code>lot--1</code>.<br><br> \
Now we need you to zone <code>lot--2</code> for a <code>house</code>. Then add a \
<code>foundation--brick</code> <code>BldgPart</code> like the example.\
<br><br>...And pay attention to the pieces of the completed house on \
<code>lot--1</code> - you'll need them later!",

//LEVEL 2 BOSS MESSAGE
"<h2>Finish that house!</h2><br><b>Whew... I'm getting tired!</b><br><br>\
I'll need you to finish up the house on <code>lot--2</code> on your own.<br><br> \
You should be able to figure it out by using <code>lot--1</code> \
as an example. Pay attention to the order that you add <code>BldgPart</code>s, \
because they need to be stacked correctly.<br><br>Make sure to paint the house \
the right colors, too!<br>...We don't want any customer complaints!",

//LEVEL 3 BOSS MESSAGE
"<h2>A day at the office...</h2><br>Houses are one thing we build, but \
we also take on commercial (<code>office</code>) contracts.<br><br>\
You need to build out this commercial row by completing the partial \
sites on all lots - and make sure they're zoned correctly!\
<br><br><b>Good luck... I know you have what it takes!</b>",

//LEVEL 4 BOSS MESSAGE
"<h2>Vandals!</h2><br>Some troublemakers defaced all the buildings on this block! \
Let's be honest though... these buildings need some work anyway. \
Go ahead and clean up the <code>graffiti</code> and <code>damage</code>, \
then replace it with some <code>flowers</code> and <code>trees</code>.<br><br>\
You'll also need to repaint and complete the missing <code>BldgPart</code>s.\
<br><br><b>Have fun!</b>",

//LEVEL 5 BOSS MESSAGE
"<h2>A real town!</h2><br>You've done great work, and I trust your skills are up to par. \
I want to give you a final test before I send you off on your own. Let's see if you can \
combine the pieces you've learned thus far to build a full town block from scratch.\
<br><br>If you can complete this job, you're ready for anything!",
];

export const EXAMPLE_ROW =
[
//LEVEL 0 EXAMPLE ROW
"<BldgPart class='lot--2 zone--house'></BldgPart>",

//LEVEL 1 EXAMPLE ROW
"<BldgPart class='lot--1 zone--house'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 zone--house'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n",

//LEVEL 2 EXAMPLE ROW
"<BldgPart class='lot--1 zone--house'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 zone--house'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--2 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--2 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 roof--house-red'></BldgPart>\n",

//LEVEL 3 EXAMPLE ROW
"<BldgPart class='lot--1 zone--office'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
<BldgPart class='lot--1 roof--office-red'></BldgPart>\n\
\n\
<BldgPart class='lot--2 zone--office'></BldgPart>\n\
<BldgPart class='lot--2 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--2 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--2 main--office-blue'></BldgPart>\n\
<BldgPart class='lot--2 roof--office-blue'></BldgPart>\n\
\n\
<BldgPart class='lot--3 zone--office'></BldgPart>\n\
<BldgPart class='lot--3 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--3 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--3 main--office-green'></BldgPart>\n\
<BldgPart class='lot--3 roof--office-green'></BldgPart>\n",

//LEVEL 4 EXAMPLE ROW
"<BldgPart class='lot--1 zone--office'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--office-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--office-blue'></BldgPart>\n\
<BldgPart class='lot--1 decor--trees'></BldgPart>\n\
\n\
<BldgPart class='lot--2 zone--house'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--2 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--2 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 roof--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 decor--flowers'></BldgPart>\n\
\n\
<BldgPart class='lot--3 zone--office'></BldgPart>\n\
<BldgPart class='lot--3 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--3 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--3 main--office-red'></BldgPart>\n\
<BldgPart class='lot--3 roof--office-green'></BldgPart>\n\
<BldgPart class='lot--3 decor--trees'></BldgPart>\n",

//LEVEL 5 EXAMPLE ROW
"<BldgPart class='lot--1 zone--office'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-red'></BldgPart>\n\
<BldgPart class='lot--1 decor--flowers'></BldgPart>\n\
\n\
<BldgPart class='lot--2 zone--house'></BldgPart>\n\
<BldgPart class='lot--2 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--2 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--2 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 roof--house-green'></BldgPart>\n\
<BldgPart class='lot--2 decor--trees'></BldgPart>\n\
\n\
<BldgPart class='lot--3 zone--office'></BldgPart>\n\
<BldgPart class='lot--3 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--3 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--3 main--office-green'></BldgPart>\n\
<BldgPart class='lot--3 roof--office-green'></BldgPart>\n\
<BldgPart class='lot--3 decor--flowers'></BldgPart>\n",
];

export const USER_ROW = 
[
//LEVEL 0 USER ROW
"<BldgPart class='lot--2 zone--vacant'></BldgPart>",

//LEVEL 1 USER ROW
"<BldgPart class='lot--1 zone--house'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 zone--vacant'></BldgPart>\n",

//LEVEL 2 USER ROW
"<BldgPart class='lot--1 zone--house'></BldgPart>\n\
<BldgPart class='lot--1 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--house-green'></BldgPart>\n\
<BldgPart class='lot--1 roof--house-green'></BldgPart>\n\n\
<BldgPart class='lot--2 zone--house'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n",

//LEVEL 3 USER ROW
"<BldgPart class='lot--1 zone--vacant'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
\n\
<BldgPart class='lot--2 zone--vacant'></BldgPart>\n\
\n\
<BldgPart class='lot--3 zone--house'></BldgPart>\n",

//LEVEL 4 USER ROW
"<BldgPart class='lot--1 zone--office'></BldgPart>\n\
<BldgPart class='lot--1 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--1 stairs--concrete'></BldgPart>\n\
<BldgPart class='lot--1 main--office-red'></BldgPart>\n\
<BldgPart class='lot--1 roof--office-blue'></BldgPart>\n\
<BldgPart class='lot--1 decor--graffiti'></BldgPart>\n\
\n\
<BldgPart class='lot--2 zone--house'></BldgPart>\n\
<BldgPart class='lot--2 foundation--brick'></BldgPart>\n\
<BldgPart class='lot--2 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--2 main--house-blue'></BldgPart>\n\
<BldgPart class='lot--2 decor--graffiti'></BldgPart>\n\
\n\
<BldgPart class='lot--3 zone--vacant'></BldgPart>\n\
<BldgPart class='lot--3 foundation--concrete'></BldgPart>\n\
<BldgPart class='lot--3 stairs--brick'></BldgPart>\n\
<BldgPart class='lot--3 main--office-red'></BldgPart>\n\
<BldgPart class='lot--3 decor--graffiti'></BldgPart>\n",

//LEVEL 5 EXAMPLE ROW
"<BldgPart class='lot--1 zone--vacant'></BldgPart>\n\
\n\
<BldgPart class='lot--2 zone--vacant'></BldgPart>\n\
\n\
<BldgPart class='lot--3 zone--vacant'></BldgPart>\n",
];


