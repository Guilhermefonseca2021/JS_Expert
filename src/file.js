const { readFile } = require("fs/promises");
const { join } = require("path");
const DEFAULT_OPTIONS = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};
const { error } = require("./constants");

class File {
  static async csvToJson(filePath) {
    const content = await File.getFileContent(filePath);
    const validation = File.isValid(content);
    if (!validation.valid) throw new Error(validation.error);
    return content;
  }

  static async getFileContent(filePath) {
    return (await readFile(filePath)).toString("utf-8");
  }

  static isValid(csvString, options = DEFAULT_OPTIONS) {
    const [header, ...fileWithoutHeader] = csvString.split("\n");
    const isHeaderValid = header === options.fields.join(",");
    
    if (!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }

    const isContentLengthAccepted =
      fileWithoutHeader.length > 0 &&
      fileWithoutHeader.length <= options.maxLines;

    if (!isContentLengthAccepted) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }

    console.log("lines", lines);
  }

  static parseCSVToJSON(csvString) {
    const lines = csvString.split('\n')
    // remove o primeiro item e joga na variavel.
    const firstLine = lines.shift()
    const header = firstLine.split(',')
    const users = lines.map(line => {
      const columns = line.split(',')
      let user = {}
      for(const index in columns) {
        
      }
    })
     
  }
}

(async () => {
  const result = await File.csvToJson("../threeItems-valid.csv");
  // const result = await File.csvToJson("../fourItems-invalid.csv");
  // const result = await File.csvToJson("../invalid-header.csv");
  console.log("result:", result);
})();

module.exports = File