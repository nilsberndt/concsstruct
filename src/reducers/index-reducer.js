import * as levelData from '../data/levels';

import { 
    UPDATE_BLUEPRINT, 
    COMPLETE_LEVEL, 
    ADVANCE_LEVEL,
    DECREASE_TIMER,
    INCREASE_SCORE,
    APPRENTICE_MODE,
    MASTER_MODE, 
    TOGGLE_HIGH_SCORE_WINDOW,
    SET_INITIALS,
    SET_FB_INITIALS,
    SET_HIGH_SCORE} from '../actions/actionTypes';

const initialState = {
  level: 0,
  userRow: levelData.USER_ROW[0],
  exampleRow: levelData.EXAMPLE_ROW[0],
  bossMessage: levelData.BOSS_MESSAGE[0],
  levelComplete: false,
  levelMarkerText: "APPRENTICE MODE",
  proceedButton: {
    visibility: 'hidden'
  },
  running: false,
  timeRemaining: 100,
  score: 0,
  gameOver: false,
  highScore: 0,
  highScoreWindow: false,
  userInitials: "XYZ",
  firebaseInitials: ""
}

const masterState = {
  level: 5,
  userRow: levelData.USER_ROW[6],
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
  highScore: 0,
  highScoreWindow: false,
  userInitials: "XYZ",
  firebaseInitials: ""
}



export default function indexReducer(state = initialState, action) {
  switch (action.type) {

    case SET_INITIALS:
      return{...state, 
        userInitials: action.userInitials};

    case SET_FB_INITIALS:
      return{...state, 
        firebaseInitials: action.firebaseInitials};

    case TOGGLE_HIGH_SCORE_WINDOW:
      return {...state, highScoreWindow: action.highScoreWindow};

    case UPDATE_BLUEPRINT:
      return { ...state, userRow: action.userRow };

    case SET_HIGH_SCORE:
      return {...state, highScore: action.highScore};

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