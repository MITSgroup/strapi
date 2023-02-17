module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
          "connect-src": ["'self'", "https:", "*.tinymce.com", "*.tiny.cloud", "blob:"],
          "img-src": ["'self'", "data:", "blob:", "*.digitaloceanspaces.com", "'self'",
          "*.tinymce.com",
          "*.tiny.cloud",
          "data:",
          "blob:",
          "cdn.jsdelivr.net",
          "strapi.io",
          "s3.amazonaws.com"],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
