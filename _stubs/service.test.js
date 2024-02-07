const Service = require("./service");
const sinon = require("sinon");
const { deepStrictEqual } = require('assert')
const BASE_URL_1 = "https://swapi.dev/api/planets/1/";
const BASE_URL_2 = "https://swapi.dev/api/planets/2/";
const mocks = {
  tatooine: require("./mocks/tatooine.json"),
  alderaan: require("./mocks/alderaan.json"),
};

(async () => {
  //   {
  //     const service = new Service()
  //     const withoutStub = await service.makeRequest(BASE_URL_2)
  //     console.log(JSON.stringify(withoutStub))
  //   }
  const service = new Service();
  const stub = sinon.stub(service, service.makeRequest.name);

  stub
    .withArgs(BASE_URL_1) // with this params
    .resolves(mocks.tatooine); // i wanna resolve be the same that ./mocks/tatooine
  stub
    .withArgs(BASE_URL_2) //
    .resolves(mocks.alderaan); //

  {
    const response = await service.makeRequest(BASE_URL_2);
    console.log("response", response);
  }
  {
    const expected = {
      "name": "Tatooine",
      "surface_water": "40",
      appearedIn: 3
    };
    const results = await service.getPlanet(BASE_URL_1)
    deepStrictEqual(results, expected)
  }
  {
    const expected = {
      "name": "Alderaan",
      "surface_water": "1",
      appearedIn: 5
    };
    const results = await service.getPlanet(BASE_URL_2)
    deepStrictEqual(results, expected)
  }
})();

// i can use: node service.test.js > mocks/tatooine.json
// '>' indicate i wanna create and put the result on ...
