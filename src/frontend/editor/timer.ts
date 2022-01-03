import { MilkdownPlugin, createSlice } from '@milkdown/core';
import { Mark, Selection } from '@milkdown/prose';

const counterCtx = createSlice(0, 'test');

export const timerPlugin: MilkdownPlugin = (pre) => {
  console.log(pre);
  pre.inject(counterCtx);
  return async (ctx) => {
    console.log(Mark);
    console.log(Selection);
    console.log(ctx.get(counterCtx));
  };
};
