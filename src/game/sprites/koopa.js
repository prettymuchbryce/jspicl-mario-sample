import { createKeyframeAnimation } from "../factories";

export const koopa = {
  default: createKeyframeAnimation(7, 1, 1, 1, 1),
  run: createKeyframeAnimation(7, 2, 0.3, 1, 1)
};
