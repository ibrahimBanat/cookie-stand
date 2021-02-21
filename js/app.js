'use strict';


/* TODO:
- create separate JS object literals
for each shop location that outputs the following to the sales.html file:

1. min/max & avgCookie in object properites(key). *
2. use Rand to genrate random number of customers *

3. Calculate and store the simulated amounts of cookies purchased
for each hour at each location using average
cookies purchased and the random number of customers generated (avg ** no of customurs/h) **

4. Store the results for each location in a separate array…
perhaps as a property of the object representing that location **

5. Display the values of each array as unordered lists in the browser

6. Calculating the sum of these hourly totals; your output for each location should look like this: **

*/

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hoursCookies: [],
  totleCookie: 0,
  randCustNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  simulatedCookies: function () {

    return Math.floor(this.randCustNum() * this.avgSale);
  },
  // workHours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
  dispalyHour: function () {
    for (let index = 0; index < 14; index++) {

      let tempNumber = this.simulatedCookies();
      this.hoursCookies.push(tempNumber);
      this.totleCookie += tempNumber;

    }
  },
  renderContent: function () {

    /* <ul>
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    </ul>
    */
    let rootElement = document.getElementById('root');
    let cityName = document.createElement('h2');
    rootElement.appendChild(cityName);
    cityName.textContent = 'Seattle';
    let unorderedElement = document.createElement('ul');
    rootElement.appendChild(unorderedElement);
    let range = 12;
    let flag = false;
    let meridiem = 'am';
    console.log(`${meridiem}: ${this.hoursCookies} cookies`);
    let index, indexArry;
    for (index = 6, indexArry = 0; index <= range; index++, indexArry++) {
      let listItem = document.createElement('li');
      unorderedElement.appendChild(listItem);
      listItem.textContent = (`${index}${meridiem}: ${this.hoursCookies[indexArry]} cookies`);
      if (index === 12 && !flag) {
        flag = true;

      } if (flag) {
        meridiem = 'pm';
        flag = false;
        index = 0;
        range = 7;
      }
    }
    let listItem = document.createElement('li');
    unorderedElement.appendChild(listItem);
    listItem.textContent = (`Total: ${this.totleCookie} cookies`);





  }

};
let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hoursCookies: [],
  totleCookie: 0,
  randCustNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  simulatedCookies: function () {

    return Math.floor(this.randCustNum() * this.avgSale);
  },
  // workHours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
  dispalyHour: function () {
    for (let index = 0; index < 14; index++) {

      let tempNumber = this.simulatedCookies();
      this.hoursCookies.push(tempNumber);
      this.totleCookie += tempNumber;

    }
  },
  renderContent: function () {

    /* <ul>
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    </ul>
    */
    let rootElement = document.getElementById('root');
    let cityName = document.createElement('h2');
    rootElement.appendChild(cityName);
    cityName.textContent = 'Tokyo';
    let unorderedElement = document.createElement('ul');
    rootElement.appendChild(unorderedElement);
    let range = 12;
    let flag = false;
    let meridiem = 'am';
    console.log(`${meridiem}: ${this.hoursCookies} cookies`);
    let index, indexArry;
    for (index = 6, indexArry = 0; index <= range; index++, indexArry++) {
      let listItem = document.createElement('li');
      unorderedElement.appendChild(listItem);
      listItem.textContent = (`${index}${meridiem}: ${this.hoursCookies[indexArry]} cookies`);
      if (index === 12 && !flag) {
        flag = true;

      } if (flag) {
        meridiem = 'pm';
        flag = false;
        index = 0;
        range = 7;
      }
    }
    let listItem = document.createElement('li');
    unorderedElement.appendChild(listItem);
    listItem.textContent = (`Total: ${this.totleCookie} cookies`);





  }

};
let dubai = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  hoursCookies: [],
  totleCookie: 0,
  randCustNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  simulatedCookies: function () {

    return Math.floor(this.randCustNum() * this.avgSale);
  },
  // workHours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
  dispalyHour: function () {
    for (let index = 0; index < 14; index++) {

      let tempNumber = this.simulatedCookies();
      this.hoursCookies.push(tempNumber);
      this.totleCookie += tempNumber;

    }
  },
  renderContent: function () {

    /* <ul>
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    </ul>
    */
    let rootElement = document.getElementById('root');
    let cityName = document.createElement('h2');
    rootElement.appendChild(cityName);
    cityName.textContent = 'Dubai';
    let unorderedElement = document.createElement('ul');
    rootElement.appendChild(unorderedElement);
    let range = 12;
    let flag = false;
    let meridiem = 'am';
    console.log(`${meridiem}: ${this.hoursCookies} cookies`);
    let index, indexArry;
    for (index = 6, indexArry = 0; index <= range; index++, indexArry++) {
      let listItem = document.createElement('li');
      unorderedElement.appendChild(listItem);
      listItem.textContent = (`${index}${meridiem}: ${this.hoursCookies[indexArry]} cookies`);
      if (index === 12 && !flag) {
        flag = true;

      } if (flag) {
        meridiem = 'pm';
        flag = false;
        index = 0;
        range = 7;
      }
    }
    let listItem = document.createElement('li');
    unorderedElement.appendChild(listItem);
    listItem.textContent = (`Total: ${this.totleCookie} cookies`);





  }

};
let paris = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hoursCookies: [],
  totleCookie: 0,
  randCustNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  simulatedCookies: function () {

    return Math.floor(this.randCustNum() * this.avgSale);
  },
  // workHours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
  dispalyHour: function () {
    for (let index = 0; index < 14; index++) {

      let tempNumber = this.simulatedCookies();
      this.hoursCookies.push(tempNumber);
      this.totleCookie += tempNumber;

    }
  },
  renderContent: function () {

    /* <ul>
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    </ul>
    */
    let rootElement = document.getElementById('root');
    let cityName = document.createElement('h2');
    rootElement.appendChild(cityName);
    cityName.textContent = 'Paris';
    let unorderedElement = document.createElement('ul');
    rootElement.appendChild(unorderedElement);
    let range = 12;
    let flag = false;
    let meridiem = 'am';
    console.log(`${meridiem}: ${this.hoursCookies} cookies`);
    let index, indexArry;
    for (index = 6, indexArry = 0; index <= range; index++, indexArry++) {
      let listItem = document.createElement('li');
      unorderedElement.appendChild(listItem);
      listItem.textContent = (`${index}${meridiem}: ${this.hoursCookies[indexArry]} cookies`);
      if (index === 12 && !flag) {
        flag = true;

      } if (flag) {
        meridiem = 'pm';
        flag = false;
        index = 0;
        range = 7;
      }
    }
    let listItem = document.createElement('li');
    unorderedElement.appendChild(listItem);
    listItem.textContent = (`Total: ${this.totleCookie} cookies`);





  }

};
let lima = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hoursCookies: [],
  totleCookie: 0,
  randCustNum: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  simulatedCookies: function () {

    return Math.floor(this.randCustNum() * this.avgSale);
  },
  // workHours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
  dispalyHour: function () {
    for (let index = 0; index < 14; index++) {

      let tempNumber = this.simulatedCookies();
      this.hoursCookies.push(tempNumber);
      this.totleCookie += tempNumber;

    }
  },
  renderContent: function () {

    /* <ul>
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    </ul>
    */
    let rootElement = document.getElementById('root');
    let cityName = document.createElement('h2');
    rootElement.appendChild(cityName);
    cityName.textContent = 'Lima';
    let unorderedElement = document.createElement('ul');
    rootElement.appendChild(unorderedElement);
    let range = 12;
    let flag = false;
    let meridiem = 'am';
    console.log(`${meridiem}: ${this.hoursCookies} cookies`);
    let index, indexArry;
    for (index = 6, indexArry = 0; index <= range; index++, indexArry++) {
      let listItem = document.createElement('li');
      unorderedElement.appendChild(listItem);
      listItem.textContent = (`${index}${meridiem}: ${this.hoursCookies[indexArry]} cookies`);
      if (index === 12 && !flag) {
        flag = true;

      } if (flag) {
        meridiem = 'pm';
        flag = false;
        index = 0;
        range = 7;
      }
    }
    let listItem = document.createElement('li');
    unorderedElement.appendChild(listItem);
    listItem.textContent = (`Total: ${this.totleCookie} cookies`);





  }

};

seattle.dispalyHour();
seattle.renderContent();

tokyo.dispalyHour();
tokyo.renderContent();

paris.dispalyHour();
paris.renderContent();

dubai.dispalyHour();
dubai.renderContent();

lima.dispalyHour();
lima.renderContent();

