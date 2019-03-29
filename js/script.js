/* `duration` variable and `setTimeout()` is just for demo. */

const duration = 500;
const myArr = [1, 2, 3];
const myObj = { a: 1, b: 2, c: 3 };

setTimeout(() => {
  console.log('`forof` iteration for an array');

  let index = 0;
  for (const value of myArr) {
    console.log({ value, index });
    index += 1;
  }

  console.log('-------------------------------');
}, 1 * duration);

setTimeout(() => {
  console.log('`myArr.map` iteration for an array');

  myArr.map((value, index) => {
    console.log({ value, index })
  });

  console.log('-------------------------------');
}, 2 * duration);

setTimeout(() => {
  console.log('`forin` iteration for an object');

  let index = 0;
  for (const key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      const value = myObj[key];
      console.log({ key, value, index });
      index += 1;
    }
  }

  console.log('-------------------------------');
}, 3 * duration);

setTimeout(() => {
  console.log('`Object.entries(myObj).map` iteration for an object');

  Object.entries(myObj).map(([key, value], index) => {
    console.log({ key, value, index });
  });

  console.log('-------------------------------');
}, 4 * duration);

setTimeout(() => {
  console.log('`Object.keys(myObj).map` iteration for an object if you need just keys');

  Object.keys(myObj).map((key, index) => {
    console.log({ key, index });
  });

  console.log('-------------------------------');
}, 5 * duration);

setTimeout(() => {
  console.log('`Object.values(myObj).map` iteration for an object if you need just values');

  Object.values(myObj).map((value, index) => {
    console.log({ value, index });
    index += 1;
  });

  console.log('-------------------------------');
}, 6 * duration);
