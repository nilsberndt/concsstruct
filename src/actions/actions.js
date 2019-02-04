import { UPDATE_BLUEPRINT, COMPLETE_LEVEL, ADVANCE_LEVEL } from './actionTypes';

import * as levelData from '../data/levels';

export function updateBlueprint(userRow) {

  return {
    type: UPDATE_BLUEPRINT,
    userRow
  };
}

export function completeLevel(level) {

  switch (level) {
    case 0:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Good job!</h2><br>I guess we'll keep you on the crew for now... Get ready for the next job!<br><br>",
        levelComplete: true,
        levelMarkerText: `LEVEL ${level} Complete!`,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 1:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Nice work!</h2><br>Looks like you can stack a few bricks after all...<br>The next job will give your new skills a good workout!<br><br>",
        levelComplete: true,
        levelMarkerText: `LEVEL ${level} Complete!`,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 2:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Awesome!</h2><br>You know, you're not bad for a newbie!<br>Let's get you started on some commercial work...<br><br>",
        levelComplete: true,
        levelMarkerText: `LEVEL ${level} Complete!`,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 3:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Yay!</h2><br>I knew you could do it!<br>Next up - cleanup and decoration...<br><br>",
        levelComplete: true,
        levelMarkerText: `LEVEL ${level} Complete!`,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 4:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Looking better!</h2><br>I think you're almost ready to work on your own!<br><br>",
        levelComplete: true,
        levelMarkerText: `LEVEL ${level} Complete!`,
        proceedButton: {
          visibility: 'visible'
        }
      };
    case 5:
      return {
        type: COMPLETE_LEVEL,
        bossMessage: "<h2>Training complete!</h2><br>You've really impressed me. Now it's time to take on some jobs of your own!<br><br> This was just a demo, but soon you'll be able to complete contracts of your own and go for the high score!",
        levelComplete: true,
        levelMarkerText: `Demo Complete!`,
        proceedButton: {
          visibility: 'hidden'
        }
      };
    default:
      return {
        type: COMPLETE_LEVEL
      }
  }
}

export function advanceLevel(level) {

  const newLevel = level + 1;

  switch (level) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
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
        }
      };
    default:
      return {
        type: ADVANCE_LEVEL
      };
  }
}
