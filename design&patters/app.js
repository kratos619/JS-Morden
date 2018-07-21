"use strict";
//Observable in Js
function EventObserver() {
  this.observer = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observer.push(fn);
    console.log(`You are Now Subscribe To ${fn.name}`);
  },
  unsubcsribe: function(fn) {
    this.observer = this.observer.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are Now UNsubscribe from ${fn.name}`);
  },

  fire: function() {
    this.observer.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// add Event Listners

document.querySelector(".sub-ms").addEventListener("click", function() {
  click.subscribe(getCurMilliseconds);
});
document.querySelector(".unsub-ms").addEventListener("click", function() {
  click.unsubcsribe(getCurMilliseconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  click.fire();
});

// click handler
const getCurMilliseconds = function() {
  console.log(`current Millisecondes: ${new Date().getMilliseconds()}`);
};
