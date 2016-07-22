'use strict'

import actionConstants from './action-constants';

export function incrementClicks(numClicks) {
  return {
    type: actionConstants.incrementClicks,
    numClicks
  }
}

