import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginId from "./pluginId";
import PluginIcon from "./components/PluginIcon";

export default {
  register(app) {
    app.customFields.register({
      name: "ui-separator",
      pluginId: "ui-separator",
      type: "string",
      intlLabel: {
        id: "ui-separator.label",
        defaultMessage: "Separator",
      },
      intlDescription: {
        id: "ui-separator.description",
        defaultMessage: "Insert block separator",
      },
      icon: PluginIcon,
      components: {
        Input: async () =>
          import(
            /* webpackChunkName: "input-component" */ "./components/Separator"
          ),
      },
      options: {
        base: [
          {
            sectionTitle: null,
            items: [
              // {name: 'name',
              // type: 'text',
              // intlLabel: {
              //   id: 'global.name',
              //   defaultMessage: 'Name',
              // },
              // description: {
              //   id: getTrad('modalForm.attribute.form.base.name.description'),
              //   defaultMessage: 'No space is allowed for the name of the attribute',} }
              {
                name: "options.value",
                type: "text",
                intlLabel: {
                  id: "ui-separator.base.value",
                  defaultMessage: "Line title",
                },
                validations: {
                  required: true,
                },
              },
            ],
          },
        ],
        advanced: [
          {
            sectionTitle: {
              id: "ui-separator.settings",
              defaultMessage: "Settings",
            },
            items: [
              {
                name: "unique",
                type: "checkbox",
                intlLabel: {
                  id: "ui-separator.settings.uniqueField",
                  defaultMessage: "Unique field",
                },
                defaultValue: true,
              },
            ],
          },
        ],
      },
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
