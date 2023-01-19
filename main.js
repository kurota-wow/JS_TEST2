'use strict';

let total = 0;
let inputValue = "";
let calc = "+";
let flg = 1; //0:数字 1:初期・演算子 2:計算結果
let mode = 'integer_mode';
let state = 'noZero_state';

function inputTotalCount(btn) {
  inputValue += btn.value;
  document.calculator.display.value = inputValue;
}
//1~9
function myValue(btn) {
  if(state == 'firstZero_state') {
    return;
  }
  if(flg !== 2){
    flg = 0;
    inputTotalCount(btn);
  }
}
//+-*/=
function getCalc(btn) {
  if(flg == 0 || flg == 2){
    flg = 1;
    if(btn.value == "="){
      total = eval(inputValue);
      document.calculator.display.value = total;
      inputValue = total;
      flg = 2;
    } else {
      inputTotalCount(btn);
      mode = 'integer_mode';
    }
  }
}
//0
function zeroValue(btn) {
  if(state == 'firstZero_state') {
    return;
  } else if (flg !== 2) {
    inputTotalCount(btn);
  } else {
    return;
  }
  if(flg == 1 && mode == 'integer_mode') {
    state = 'firstZero_state';
  }
}
//00
function doubleZeroValue(btn) {
  if(state == 'noZero_state' && flg == 1) {
    return;
  } else if (state == 'firstZero_state') {
    return;
  } else if (flg !== 2) {
    inputTotalCount(btn);
  } else {
    return;
  }
  if (flg == 1 && mode == 'integer_mode') {
    state = 'firstZero_state';
  }
}
//.
function dotValue(btn) {
  if(mode == 'demimal_mode' || flg == 2){
    return;
  }
  flg = 1;
  inputTotalCount(btn);
  mode = 'demimal_mode';
  state = 'zero_state';
}
//AC
function resetValue(btn) {
  flg = 1;
  inputValue = "";
  document.calculator.display.value = inputValue;
  mode = 'integer_mode';
  state = 'noZero_state';
}