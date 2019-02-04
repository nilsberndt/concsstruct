import * as levelData from '../data/levels';

import { UPDATE_BLUEPRINT, COMPLETE_LEVEL, ADVANCE_LEVEL } from '../actions/actionTypes';

const initialState = {
  level: 0,
  userRow: levelData.USER_ROW[0],
  exampleRow: levelData.EXAMPLE_ROW[0],
  bossMessage: levelData.BOSS_MESSAGE[0],
  levelComplete: false,
  levelMarkerText: "LEVEL 0",
  proceedButton: {
    visibility: 'hidden'
  }
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
        proceedButton: action.proceedButton
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
        proceedButton: action.proceedButton
      };
    default:
      return state;
  }

}