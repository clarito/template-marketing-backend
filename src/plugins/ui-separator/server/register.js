"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "ui-separator",
    plugin: "ui-separator",
    type: "string",
    inputSize: {
      default: 12,
      isResizable: false,
    },
  });
};
