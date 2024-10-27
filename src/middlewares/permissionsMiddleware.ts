import { RequestHandler } from 'express';

const permissionMiddleware = (permissions: Array<string>) => {
  const handler: RequestHandler = async (req, res) => {};

  return handler;
};
