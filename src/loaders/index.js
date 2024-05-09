import express, { Express } from 'express';
import expressLoader from '@/loaders/express.ts';

export default async ({ expressApp }: { expressApp: Express }) => {
  await expressLoader({ app: expressApp });
};
