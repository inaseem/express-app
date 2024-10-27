import { EnvConfig } from './type';

const envConfig: EnvConfig = {
  development: {
    jwtExpiry: '2h',
  },
  production: {
    jwtExpiry: '1h',
  },
};

class Config {
  private static instance: Config | null = null;
  static config: EnvConfig[string] | null = null;

  private constructor() {}

  static initialize() {
    if (!this.instance) {
      this.instance = new Config();
      const env = process.env.NODE_ENV || 'development';
      this.config = envConfig[env as keyof typeof envConfig];
    }
  }

  static getInstance() {
    if (!this.instance) {
      throw new Error('Config is not initialized. Call initialize() first.');
    }
    return this.config!;
  }
}

export default Config;
