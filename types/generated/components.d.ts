import type { Schema, Attribute } from '@strapi/strapi';

export interface ArraysEmails extends Schema.Component {
  collectionName: 'components_arrays_emails';
  info: {
    displayName: 'Email';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    Email: Attribute.Email & Attribute.Required;
  };
}

export interface ArraysImage extends Schema.Component {
  collectionName: 'components_arrays_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface ArraysMarkdown extends Schema.Component {
  collectionName: 'components_home_markdown';
  info: {
    displayName: 'Markdown';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Desc: Attribute.RichText & Attribute.Required;
  };
}

export interface ArraysString extends Schema.Component {
  collectionName: 'components_home_string';
  info: {
    displayName: 'String';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'.'>;
  };
}

export interface FooterFormCheckbox extends Schema.Component {
  collectionName: 'components_footer_form_checkbox';
  info: {
    displayName: 'Form Checkbox';
  };
  attributes: {
    Value: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface FooterFormInput extends Schema.Component {
  collectionName: 'components_footer_form_inputs';
  info: {
    displayName: 'Form Input';
  };
  attributes: {
    Type: Attribute.Enumeration<
      [
        'Description',
        'Name',
        'Email',
        'Phone',
        'Age',
        'Price',
        'Promo code',
        'Pieces',
        'Job position',
        'Custom'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Name'>;
    Title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Placeholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'.'>;
    Required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface FooterSocialMedium extends Schema.Component {
  collectionName: 'components_footer_social_medium';
  info: {
    displayName: 'Social Medium';
  };
  attributes: {
    CompanyName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'.'>;
    Url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Icon: Attribute.Media & Attribute.Required;
  };
}

export interface HomeAdvantagesPanel extends Schema.Component {
  collectionName: 'components_home_advantages_panels';
  info: {
    displayName: 'Advantages Panel';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    Icon: Attribute.Media & Attribute.Required;
  };
}

export interface HomeFaqPanel extends Schema.Component {
  collectionName: 'components_home_faq_panel';
  info: {
    displayName: 'Faq Panel';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeGalleryButton extends Schema.Component {
  collectionName: 'components_home_gallery_button';
  info: {
    displayName: 'Gallery Button';
  };
  attributes: {
    ButtonTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'.'>;
    Assets: Attribute.Media & Attribute.Required;
  };
}

export interface HomeLinkButton extends Schema.Component {
  collectionName: 'components_home_link_button';
  info: {
    displayName: 'Link Button';
  };
  attributes: {
    ButtonTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'.'>;
    Url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
  };
}

export interface HomeReviewPanel extends Schema.Component {
  collectionName: 'components_home_review_panels';
  info: {
    displayName: 'Review Panel';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'.'>;
    Stars: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }> &
      Attribute.DefaultTo<5>;
  };
}

export interface HomeServicesPanelPrice extends Schema.Component {
  collectionName: 'components_home_services_panel_prices';
  info: {
    displayName: 'Services Panel - Price';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Value: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    Currency: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'.'>;
    ButtonType: Attribute.Enumeration<['Gallery', 'Link']> &
      Attribute.Required &
      Attribute.DefaultTo<'Link'>;
    GalleryButton: Attribute.Component<'home.gallery-button'> &
      Attribute.Required;
    LinkButton: Attribute.Component<'home.link-button'> & Attribute.Required;
  };
}

export interface HomeServicesPanel extends Schema.Component {
  collectionName: 'components_home_services_panels';
  info: {
    displayName: 'Services Panel';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    SeparatorTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'.'>;
    Included: Attribute.Component<'arrays.string', true> & Attribute.Required;
    PriceBlockExist: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    PriceBlock: Attribute.Component<'home.services-panel-price'> &
      Attribute.Required;
  };
}

export interface HomeStatsPanel extends Schema.Component {
  collectionName: 'components_home_stats_panel';
  info: {
    displayName: 'Stats Panel';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface HomeTeamPanel extends Schema.Component {
  collectionName: 'components_home_team_panel';
  info: {
    displayName: 'Team Panel';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    Image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'arrays.emails': ArraysEmails;
      'arrays.image': ArraysImage;
      'arrays.markdown': ArraysMarkdown;
      'arrays.string': ArraysString;
      'footer.form-checkbox': FooterFormCheckbox;
      'footer.form-input': FooterFormInput;
      'footer.social-medium': FooterSocialMedium;
      'home.advantages-panel': HomeAdvantagesPanel;
      'home.faq-panel': HomeFaqPanel;
      'home.gallery-button': HomeGalleryButton;
      'home.link-button': HomeLinkButton;
      'home.review-panel': HomeReviewPanel;
      'home.services-panel-price': HomeServicesPanelPrice;
      'home.services-panel': HomeServicesPanel;
      'home.stats-panel': HomeStatsPanel;
      'home.team-panel': HomeTeamPanel;
    }
  }
}
