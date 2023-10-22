module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "website-builder": {
    enabled: true,
    config: {
      builds: [
        {
          name: "Website",
          url: env("WEBSITE_DEPLOY_KEY"),
          trigger: {
            type: "manual",
          },
          body: {
            clear_cache: true,
          },
        },
      ],
    },
  },
  "ui-separator": {
    enabled: true,
    resolve: "./src/plugins/ui-separator",
  },
});
