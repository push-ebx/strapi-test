
module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_MaIVrYwJrh9dr92PUPluAx8lubrF/pO8WEsM9NC",
      apiToken: "t1AVgspbjTkaT6yB3yrUa6xB",
      appFilter: "strapi-test",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
