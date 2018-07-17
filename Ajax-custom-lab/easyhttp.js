function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url) {
  this.http.open("GET", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      console.log(this.http.responseText);
    }
  };
  this.http.send();
};
// Make an HTTP Post Request

// Make an HTTP PUT Request

// Make an HTTP delete Request
