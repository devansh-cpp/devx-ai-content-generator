/** @type {import ("drizzle-kit").Config} */

export default {
    schema : "./utils/schema.tsx",
    dialect : "postgresql",
    dbCredentials : {
        url :  'postgresql://neondb_owner:npg_uOxmJ8Kg2Xpa@ep-little-unit-a8nfeozb-pooler.eastus2.azure.neon.tech/ai-content-generator?sslmode=require',
    },
};