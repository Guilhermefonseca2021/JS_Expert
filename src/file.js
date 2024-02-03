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
    if(!validation.valid) throw new Error(validation.error)
    return content;
  }

  static async getFileContent(filePath) {
    const filename = join(__dirname, filePath);
    return (await readFile(filename)).toString("utf-8");
  }

  static isValid(csvString, options = DEFAULT_OPTIONS) {
    const [header, ...fileWithoutHeader] = csvString.split("\n");
    const isHeaderValid = header === options.fields.join(",");
    if (!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false
      };
    }

    const isContentLengthAccepted = (
        fileWithoutHeader.legth  > 0 &&
        fileWithoutHeader.length <= options.maxLines
    )

    if(!isContentLengthAccepted) {
        return {
            error: error.FILE_LENGth_ERROR_MESSAGE,
            valid: false
        }
    }
    

    console.log("lines", lines);
  }
}

(async () => {
  // const result = await File.csvToJson("../threeItems-valid.csv");
  const result = await File.csvToJson("../fourItems-invalid.csv");
//   const result = await File.csvToJson("../invalid-header.csv");
  console.log("result:", result);
})();
