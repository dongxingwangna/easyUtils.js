/**
 * @docName: index.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:42
 */

import { Color, Gradient } from './core/color';

import {
  getTheDistanceOfAPointLineSegment,
  determineIfAPointIsWithinAnotherPointArea,
  getTheDistanceFromPointToLine,
} from './core/graphic';
import { Point } from './core/graphic/Point';

export {
  Color,
  Gradient,
  Point,
  getTheDistanceOfAPointLineSegment,
  getTheDistanceFromPointToLine,
  determineIfAPointIsWithinAnotherPointArea,
};
