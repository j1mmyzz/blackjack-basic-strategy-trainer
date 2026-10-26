import test from 'node:test';import assert from 'node:assert/strict';import {outcome} from './outcome.js';
const c=(...v)=>v.map(v=>({v}));const h=(cards,extras={})=>({cards:c(...cards),bet:1,...extras});
test('natural pays 3:2 and pushes another natural',()=>{assert.equal(outcome(h([11,10]),c(10,9)).units,1.5);assert.equal(outcome(h([11,10]),c(11,10)).units,0)});
test('dealer natural beats nonnatural 21',()=>assert.equal(outcome(h([7,7,7]),c(11,10)).units,-1));
test('split 21 pays even money',()=>assert.equal(outcome(h([11,10],{split:true}),c(10,9)).units,1));
test('double, surrender, bust, push',()=>{assert.equal(outcome(h([10,9],{bet:2}),c(10,8)).units,2);assert.equal(outcome(h([10,6],{surrender:true}),c(10,8)).units,-.5);assert.equal(outcome(h([10,6,10]),c(10,6,10)).units,-1);assert.equal(outcome(h([10,8]),c(10,8)).units,0)});
