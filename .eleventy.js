module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy('src/assets');

    return {
      dir: {
        input: "src",       // Source folder
        includes: "_includes", // Folder for layouts and includes
        output: "_site"     // Output folder
      }
    };
  };
  