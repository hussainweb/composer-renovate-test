module.exports = {
  platform: "gitlab",
  endpoint: "https://gitlab.axl8.xyz/api/v4/",
  assignees: [],
  baseBranches: ["develop"],
  repositories: ["axelerant/axelerant-website"],
  labels: ["renovate"],
  extends: ["config:base"],
  gitAuthor: "Renovate <renovate@axelerant.com>",
  logLevel: "debug",
};
