import { getViewById } from '@nativescript/core';

export function onLoaded(args)
{
  let page = args.object;
  let animating = getViewById(page, "label");

  animating.backgroundColor =  new Color("black");
}

export function onMove(args)
{
  let button = args.object;
  let parent = button.parent;
  let animating = getViewById(parent , "label");

  animating.animate({
    backroundColor: new Color("red") , 
    translate: {x: 100 , y: 10},
    duration: 5000,
    rotate:300,
    iterations : 2
  })
  .then(()=> {
    return animating.animate({
      translate: { x: 0 , y : 0},
      duration: 3000
    });
  })
}