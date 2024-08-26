import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
