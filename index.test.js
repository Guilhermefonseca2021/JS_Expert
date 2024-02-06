const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert")


(
  // rejects espera voltar uma promisy rejeitada.
  //   deepStrictEqual verifaca alem do valor a rereferencia tbm.

  async () => {
    {
      const filePath = "./mocks/emptyFields";
      const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
      const result = File.csvToJson(filePath);
      await rejects(result, rejection);
    }
    {
      const filePath = "./mocks/fourItems-invalid.csv";
      const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
      const result = File.csvToJson(filePath);
      await rejects(result, rejection);
    }
    {
      const filePath = "./mocks/threeItems-valid.csv";
      const result = await File.csvToJson(filePath);
      const expected = [
        {
          "id": 123,
          "name": "Guilherme Fonseca",
          "profession": "Javascript CEO",
          "age": 20
        },
        {
          "id": 321,
          "name": "Kuka da silva",
          "profession": "Js specialist",
          "age": 80
        },
        {
          "id": 231,
          "name": "Joazin",
          "profession": "Java developer",
          "age": 30
        }
      ];
    }
  }
)();
