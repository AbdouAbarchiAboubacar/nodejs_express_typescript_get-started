declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      MONGODB_PRODUCTION_DATABASE: string;
      MONGODB_DEVELOPMENT_DATABASE: string;
      MONGODB_REALM_APP_NAME: string;
      DEVELOPMENT_PORT: number;
      FIREBASE_FIREBASE_API_KEY: string;
      FIREBASE_AUTH_DOMAIN: string;
      FIREBASE_DATABASE_URL: string;
      FIREBASE_PROJECT_ID: string;
      FIREBASE_STORAGE_BUCKET: string;
      FIREBASE_MESSAGING_SENDER_ID: string;
      FIREBASE_APP_ID: string;
      FIREBASE_MEASUREMENT_ID: string;
      FIREBASE_SERVICE_ACCOUNT_TYPE: string;
      FIREBASE_SERVICE_ACCOUNT_PROJECT_ID: string;
      FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID: string;
      FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY: string;
      FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL: string;
      FIREBASE_SERVICE_ACCOUNT_CLIENT_ID: string;
      FIREBASE_SERVICE_ACCOUNT_AUTH_URI: string;
      FIREBASE_SERVICE_ACCOUNT_TOKEN_URI: string;
      FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL: string;
      FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL: string;
    }
  }
}
export {};
