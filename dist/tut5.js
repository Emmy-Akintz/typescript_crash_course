"use strict";
//--------
// arrays
//--------
let names = ['Mario', 'Luiji', 'Peach'];
let ages = [25, 28, 24];
names.push('bowser');
ages.push(35);
//----------------
// object literals with arrays
//----------------
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('peaches');
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0];
//----------------
// object literals
//----------------
let user = {
    firstName: 'Mario',
    age: 30,
    id: 1
};
user.firstName = 'Peach';
user.id = 2;
//------------------------------------
// type inference with object literals
//------------------------------------
let person = {
    name: 'Luiji',
    score: 35
};
person.name = 'bowser';
person.score = 40;
const score = person.score;
