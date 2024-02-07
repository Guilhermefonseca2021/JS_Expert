<a href="">Click here to review</a>

with stubs in easy to understand and the code will never depends of the API, if api be take down from the internet you server won't be affected.

```js
const sinon = require("sinon");
const mocks = {
  tatooine: require("./mocks/tatooine.json"),
  alderaan: require("./mocks/alderaan.json"),
}; 

// sinom define one function
stub
    .withArgs(BASE_URL_1) 
    .resolves(mocks.tatooine); // behind defines the behavior
  stub
    .withArgs(BASE_URL_2) 
    .resolves(mocks.alderaan);
```

focus on the output and the logic before the api results.