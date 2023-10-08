'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('ui-separator')
      .service('myService')
      .getWelcomeMessage();
  },
});
