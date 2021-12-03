const StyleDictionary = require("style-dictionary");

StyleDictionary.registerTransform({
  name: "size/px", // notice: the name is an override of an existing predefined method
  type: "value",
  matcher: function (prop) {
    /* supports both "pixel" and "pixels" */
    return (
      prop &&
      prop.original &&
      prop.original.unit &&
      prop.original.unit.startsWith("pixel")
    );
  },
  transformer: function (prop) {
    return `${prop.value}px`;
  },
});

module.exports = {
  source: ["./src/tokens/design-tokens.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "./src/tokens/dist/",
      transforms: ["size/px", "name/ti/camel"],
      /* We split tokens into separate files - it will be easier to use them this way */
      files: [
        /* Filter and extract typography tokens */
        {
          destination: "typography.js",
          format: "javascript/es6",
          filter: function (prop) {
            return prop.path[0] === "typography";
          },
        },
        /* Filter and extract spacing tokens */
        {
          destination: "spacing.js",
          format: "javascript/es6",
          filter: {
            type: "custom-spacing",
          },
        },
        /* Filter and extract radii tokens */
        {
          destination: "radii.js",
          format: "javascript/es6",
          filter: {
            type: "custom-radius",
          },
        },
        /* Filter and extract sizes tokens */
        {
          destination: "sizes.js",
          format: "javascript/es6",
          filter: {
            type: "dimension",
          },
        },
        /* Filter and extract font tokens */
        {
          destination: "font.js",
          format: "javascript/es6",
          filter: {
            type: "custom-fontStyle",
          },
        },
        /* Filter and extract effect tokens */
        {
          destination: "effect.js",
          format: "javascript/es6",
          filter: {
            type: "custom-shadow",
          },
        },
        /* Filter and extract color tokens*/
        {
          destination: "colors.js",
          format: "javascript/es6",
          filter: {
            type: "color",
          },
        },
      ],
    },
  },
};
