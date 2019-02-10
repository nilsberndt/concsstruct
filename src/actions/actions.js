import { 
    UPDATE_BLUEPRINT, 
    COMPLETE_LEVEL, 
    ADVANCE_LEVEL,
    DECREASE_TIMER,
    INCREASE_SCORE,
    SET_HIGH_SCORE,
    APPRENTICE_MODE,
    TOGGLE_HIGH_SCORE_WINDOW,
    SET_INITIALS,
    SET_FB_INITIALS,
    MASTER_MODE } from './actionTypes';

import * as buildingData from '../data/buildingParts';

import * as levelData from '../data/levels';

export function updateBlueprint(userRow) {

  return {
    type: UPDATE_BLUEPRINT,
    userRow
  };
}

export function setInitials(initials, fbInitials) {
  return {
    type: SET_INITIALS,
    userInitials: initials,
    firebaseInitials: fbInitials
  };
}

export function setFBInitials(fbInitials) {
  return {
    type: SET_FB_INITIALS,
    firebaseInitials: fbInitials
  };
}

export function setHighScore(newHigh) {
  return {
    type: SET_HIGH_SCORE,
    highScore: newHigh
  };
}

export function toggleHighScoreWindow(current) {
  return {
    type: TOGGLE_HIGH_SCORE_WINDOW,
    highScoreWindow: !current
  };
}


export function apprenticeMode() {
  return {
    type: APPRENTICE_MODE
  };
}

export function masterMode() {
  return {
    type: MASTER_MODE
  };
}


export function countdown(currentTime) {
  var newTime = currentTime - 1;

  return {
    type: DECREASE_TIMER,
    timeRemaining: newTime
  };
}

export function addScore(currentScore, currentLevel, currentTime) {
  var newScore = currentScore + (currentLevel * 10) + currentTime;
  return {
    type: INCREASE_SCORE,
    score: newScore
  };
}

export function completeLevel(level) {

  var newLevelMarker = `LEVEL ${level} Complete!`;
  var expertLevelMarker = `LEVEL ${level-6} Complete!`;

  switch (level) {
    case 0:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Good job!</h2><br>I guess you've earned a spot on my crew... Get ready for the next job!<br><br>",
        levelComplete: true,
        levelMarkerText: newLevelMarker,
        proceedButton: {
          visibility: 'visible'
        }
      }; 
    case 1:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Nice work!</h2><br>Looks like you can stack a few bricks after all...<br>The next job will give your new skills a good workout!<br><br>",
        levelComplete: true,
        levelMarkerText: newLevelMarker,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 2:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Awesome!</h2><br>You know, you're not bad for a newbie!<br>Let's get you started on some commercial work...<br><br>",
        levelComplete: true,
        levelMarkerText: newLevelMarker,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 3:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Yay!</h2><br>I knew you could do it!<br>Next up - cleanup and decoration...<br><br>",
        levelComplete: true,
        levelMarkerText: newLevelMarker,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 4:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Looking better!</h2><br>I think you're almost ready to work on your own!<br><br>",
        levelComplete: true,
        levelMarkerText: newLevelMarker,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 5:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Apprenticeship complete!</h2><br>You're a master builder now. It's time to take on some jobs of your own and go for the high score!<br><br>Are you Ready?",
        levelComplete: true,
        levelMarkerText: "Training Complete!",
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 999:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Out of time!</h2><br>Try again?<br><br>",
        levelComplete: true,
        levelMarkerText: "Game Over!",
        proceedButton: {
          visibility: 'visible'
        },
        running: false,
        gameOver: true
      };
    default:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Nice work!</h2><br>Here comes the next job...<br><br>",
        levelComplete: true,
        levelMarkerText: expertLevelMarker,
        proceedButton: {
          visibility: 'visible'
        },
        running: false,
        gameOver: false
      };
  }
}

export function advanceLevel(currentLevel, currentTime, currentScore, currentHighScore) {

  const newLevel = currentLevel + 1;
  const newTime = currentTime + 100;
  var newHighScore = currentHighScore;
  if (currentScore > currentHighScore){
    newHighScore = currentScore;
  }
  switch (currentLevel) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return {
        type: ADVANCE_LEVEL,
        level: newLevel,
        userRow: levelData.USER_ROW[newLevel],
        exampleRow: levelData.EXAMPLE_ROW[newLevel],
        bossMessage: levelData.BOSS_MESSAGE[newLevel],
        levelComplete: false,
        levelMarkerText: `LEVEL ${newLevel}`,
        proceedButton: {
          visibility: 'hidden'
        },
        timeRemaining: currentTime,
        score: currentScore,
        highScore: newHighScore
      };
    case 5:
      return {
        type: ADVANCE_LEVEL,
        level: newLevel,
        userRow: generateUserRow(),
        exampleRow: generateExampleRow(),
        bossMessage: levelData.BOSS_MESSAGE[6],
        levelComplete: false,
        levelMarkerText: `LEVEL ${newLevel-6}`,
        proceedButton: {
          visibility: 'hidden'
        },
        running: true,
        timeRemaining: currentTime,
        score: currentScore,
        highScore: newHighScore
      };
    //Game Over Reset
    case 999:
      return {
        type: ADVANCE_LEVEL,
        level: 6,
        userRow: generateUserRow(),
        exampleRow: generateExampleRow(),
        bossMessage: levelData.BOSS_MESSAGE[6],
        levelComplete: false,
        levelMarkerText: `LEVEL 0`,
        proceedButton: {
          visibility: 'hidden'
        },
        running: true,
        timeRemaining: 100,
        score: 0,
        highScore: newHighScore
      };
    default:
      return {
        type: ADVANCE_LEVEL,
        level: newLevel,
        userRow: generateUserRow(),
        exampleRow: generateExampleRow(),
        bossMessage: levelData.BOSS_MESSAGE[6],
        levelComplete: false,
        levelMarkerText: `LEVEL ${newLevel-6}`,
        proceedButton: {
          visibility: 'hidden'
        },
        running: true,
        timeRemaining: newTime,
        score: currentScore,
        highScore: newHighScore
      };
  }
}

function generateExampleRow(){
  //effectively random boolean to determine adding decor item or not
  var hasDecor = false;
  //string containing new 'random' level data
  var randomExample = "";

  //EXAMPLE LOT 1
  randomExample += buildingData.LOT_1_GROUND[getRandomInt(1,2)] + "\n";
  randomExample += buildingData.LOT_1_FOUNDATION[getRandomInt(0,3)] + "\n";
  randomExample += buildingData.LOT_1_STAIRS[getRandomInt(0,3)] + "\n";
  randomExample += buildingData.LOT_1_MAIN[getRandomInt(0,6)] + "\n";
  randomExample += buildingData.LOT_1_ROOF[getRandomInt(0,6)] + "\n";
  hasDecor = Math.random() >= 0.5;
  if (hasDecor) {randomExample += buildingData.LOT_1_DECOR[getRandomInt(2,3)] + "\n";}
  randomExample += "\n";

  //EXAMPLE LOT 2
  randomExample += buildingData.LOT_2_GROUND[getRandomInt(1,2)] + "\n";
  randomExample += buildingData.LOT_2_FOUNDATION[getRandomInt(0,3)] + "\n";
  randomExample += buildingData.LOT_2_STAIRS[getRandomInt(0,3)] + "\n";
  randomExample += buildingData.LOT_2_MAIN[getRandomInt(0,6)] + "\n";
  randomExample += buildingData.LOT_2_ROOF[getRandomInt(0,6)] + "\n";
  hasDecor = Math.random() >= 0.5;
  if (hasDecor) {randomExample += buildingData.LOT_2_DECOR[getRandomInt(2,3)] + "\n";}
  randomExample += "\n";

  //EXAMPLE LOT 3
  randomExample += buildingData.LOT_3_GROUND[getRandomInt(1,2)] + "\n";
  randomExample += buildingData.LOT_3_FOUNDATION[getRandomInt(0,3)] + "\n";
  randomExample += buildingData.LOT_3_STAIRS[getRandomInt(0,3)] + "\n";
  randomExample += buildingData.LOT_3_MAIN[getRandomInt(0,6)] + "\n";
  randomExample += buildingData.LOT_3_ROOF[getRandomInt(0,6)] + "\n";
  hasDecor = Math.random() >= 0.5;
  if (hasDecor) {randomExample += buildingData.LOT_3_DECOR[getRandomInt(2,3)] + "\n";}
  randomExample += "\n";

  return randomExample;
}

function generateUserRow(){
  //effectively random booleans to determine completeness of initial building
  var hasFoundationStairs, hasMainRoof = false;
  //string containing new 'random' level data
  var randomUser = "";

  //EXAMPLE LOT 1
  randomUser += buildingData.LOT_1_GROUND[0] + "\n";
  
  hasFoundationStairs = Math.random() >= 0.5;
  if (hasFoundationStairs){
    randomUser += buildingData.LOT_1_FOUNDATION[getRandomInt(0,3)] + "\n";
    randomUser += buildingData.LOT_1_STAIRS[getRandomInt(0,3)] + "\n";

    hasMainRoof = Math.random() >= 0.5;
    if (hasMainRoof) {
      randomUser += buildingData.LOT_1_MAIN[getRandomInt(0,6)] + "\n";
      randomUser += buildingData.LOT_1_ROOF[getRandomInt(0,6)] + "\n";
      randomUser += buildingData.LOT_1_DECOR[getRandomInt(0,1)] + "\n";
    }
  }
  randomUser += "\n";

  //EXAMPLE LOT 2
  randomUser += buildingData.LOT_2_GROUND[0] + "\n";
  
  hasFoundationStairs = Math.random() >= 0.5;
  if (hasFoundationStairs){
    randomUser += buildingData.LOT_2_FOUNDATION[getRandomInt(0,3)] + "\n";
    randomUser += buildingData.LOT_2_STAIRS[getRandomInt(0,3)] + "\n";

    hasMainRoof = Math.random() >= 0.5;
    if (hasMainRoof) {
      randomUser += buildingData.LOT_2_MAIN[getRandomInt(0,6)] + "\n";
      randomUser += buildingData.LOT_2_ROOF[getRandomInt(0,6)] + "\n";
      randomUser += buildingData.LOT_2_DECOR[getRandomInt(0,1)] + "\n";
    }
  }
  randomUser += "\n";

  //EXAMPLE LOT 3
  randomUser += buildingData.LOT_3_GROUND[0] + "\n";
  
  hasFoundationStairs = Math.random() >= 0.5;
  if (hasFoundationStairs){
    randomUser += buildingData.LOT_3_FOUNDATION[getRandomInt(0,3)] + "\n";
    randomUser += buildingData.LOT_3_STAIRS[getRandomInt(0,3)] + "\n";

    hasMainRoof = Math.random() >= 0.5;
    if (hasMainRoof) {
      randomUser += buildingData.LOT_3_MAIN[getRandomInt(0,6)] + "\n";
      randomUser += buildingData.LOT_3_ROOF[getRandomInt(0,6)] + "\n";
      randomUser += buildingData.LOT_3_DECOR[getRandomInt(0,1)] + "\n";
    }
  }
  randomUser += "\n";

  return randomUser;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
