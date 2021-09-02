'use strict';

const currentAppTime = document.querySelector('.current-time');

const updateTime = () => {
  let today = new Date();
  const hour = `${today.getHours()}`.padStart(2, '0');
  const minute = `${today.getMinutes()}`.padStart(2, '0');
  const second = `${today.getSeconds()}`.padStart(2, '0');
  currentAppTime.textContent = `${hour}:${minute}:${second}`;
};

setInterval(updateTime, 1000);
