import * as levelData from '../data/levels';

import { 
    UPDATE_BLUEPRINT, 
    COMPLETE_LEVEL, 
    ADVANCE_LEVEL,
    DECREASE_TIMER,
    INCREASE_SCORE,
    APPRENTICE_MODE,
    MASTER_MODE } from '../actions/actionTypes';


function checkLocalScore(){
  var localHighScore = 0;
  if (window.localStorage.getItem('highScore')){
    localHighScore = parseInt(window.localStorage.getItem('highScore'));
  };
  return localHighScore;
}



const initialState = {
  level: 0,
  userRow: levelData.USER_ROW[0],
  exampleRow: levelData.EXAMPLE_ROW[0],
  bossMessage: levelData.BOSS_MESSAGE[0],
  levelComplete: false,
  levelMarkerText: "APPRENTICE TRAINING",
  proceedButton: {
    visibility: 'hidden'
  },
  running: false,
  timeRemaining: 100,
  score: 0,
  gameOver: false,
  highScore: checkLocalScore()
}

const masterState = {
  level: 5,
  userRow: levelData.USER_ROW[5],
  exampleRow: "",
  bossMessage: "<h2>Master Contractor Mode</h2>Race to build as much as possible before time runs out. For each level you complete, you are awarded points based on how quickly you complete the level and how far along on your master journey you are. Go for the high score! Ready?",
  levelComplete: true,
  levelMarkerText: "MASTER MODE",
  proceedButton: {
    visibility: 'visible'
  },
  running: false,
  timeRemaining: 100,
  score: 0,
  gameOver: false,
  highScore: checkLocalScore()
}



export default function indexReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BLUEPRINT:
      return { ...state, userRow: action.userRow };
    case COMPLETE_LEVEL:
      return {
        ...state,
        bossMessage: action.bossMessage,
        levelComplete: action.levelComplete,
        levelMarkerText: action.levelMarkerText,
        proceedButton: action.proceedButton,
        running: action.running,
        gameOver: action.gameOver
      };
    case ADVANCE_LEVEL:
      return {
        ...state,
        level: action.level,
        userRow: action.userRow,
        exampleRow: action.exampleRow,
        bossMessage: action.bossMessage,
        levelComplete: action.levelComplete,
        levelMarkerText: action.levelMarkerText,
        proceedButton: action.proceedButton,
        running: action.running,
        timeRemaining: action.timeRemaining,
        score: action.score,
        highScore: action.highScore
      };
    case DECREASE_TIMER:
      return {
        ...state,
        timeRemaining: action.timeRemaining
      };
    case INCREASE_SCORE:
      return {
        ...state,
        score: action.score
      };
    case APPRENTICE_MODE:
      return initialState;
    case MASTER_MODE:
      return masterState;
    default:
      return state;
  }

}