namespace NodeJS {
  interface ProcessEnv {
    MONGO_DB_URI: string;
    JWT_SECRET: string;
  }
}

declare namespace Express {
  export interface Request {
    user: {
      id: string;
      name: string;
      email: string;
      password: string;
      role: string;
    };
  }
}
