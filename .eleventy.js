module.exports = function(eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Return 11ty config
  return {
    // Directory structure
    dir: {
      input: "src",            // Source folder
      includes: "_includes",   // Layouts/includes folder
      output: "_site",          // Build output
      pathPrefix: "/LimitsAtInfinity01.github.io/"
    },
  };
};
