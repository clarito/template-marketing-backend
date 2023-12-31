import type { Schema, Attribute } from '@strapi/strapi';

export interface ArraysEmails extends Schema.Component {
  collectionName: 'components_arrays_emails';
  info: {
    displayName: 'Email';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    Email: Attribute.Email & Attribute.Required & Attribute.DefaultTo<'.'>;
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
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'.'>;
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
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.DefaultTo<'.'>;
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
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'.'>;
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
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.DefaultTo<'.'>;
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
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.DefaultTo<'.'>;
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
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.DefaultTo<'.'>;
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface HomeTrustedPanel extends Schema.Component {
  collectionName: 'components_home_trusted_panels';
  info: {
    displayName: 'Trusted Panel';
  };
  attributes: {
    URL: Attribute.String & Attribute.Required & Attribute.DefaultTo<'.'>;
    Logo: Attribute.Media & Attribute.Required;
  };
}

export interface LawLaw extends Schema.Component {
  collectionName: 'components_law_laws';
  info: {
    displayName: 'Law Panel';
    description: '';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'.'>;
    Icon: Attribute.Media & Attribute.Required;
    LastUpdate: Attribute.DateTime & Attribute.Required;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.DefaultTo<'.'>;
  };
}

export interface LawNestedLawPanelItem extends Schema.Component {
  collectionName: 'components_law_nested_law_panels_item';
  info: {
    displayName: 'Nested Law Panel - Item';
    description: '';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'.'>;
    Desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'simple';
        }
      > &
      Attribute.DefaultTo<'.'>;
  };
}

export interface LawNestedLaw extends Schema.Component {
  collectionName: 'components_law_nested_laws';
  info: {
    displayName: 'Nested Law Panel';
    description: '';
  };
  attributes: {
    Title: Attribute.Text & Attribute.Required & Attribute.DefaultTo<'.'>;
    Icon: Attribute.Media & Attribute.Required;
    LastUpdate: Attribute.DateTime & Attribute.Required;
    Panel: Attribute.Component<'law.nested-law-panel-item', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'arrays.emails': ArraysEmails;
      'arrays.image': ArraysImage;
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
      'home.trusted-panel': HomeTrustedPanel;
      'law.law': LawLaw;
      'law.nested-law-panel-item': LawNestedLawPanelItem;
      'law.nested-law': LawNestedLaw;
    }
  }
}
