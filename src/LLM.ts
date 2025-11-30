import { ChatOpenAI } from '@langchain/openai';
import { createAgent, ReactAgent, tool } from 'langchain';
import z from 'zod';

const getWeather = tool(
  async ({ city }, config) => {
    return `The weather in ${city} is always sunny!`;
  },
  {
    name: 'get_weather',
    description: 'Get weather for a given city.',
    schema: z.object({
      city: z.string(),
    }),
  }
);

export const getModel = () => {
  const model = new ChatOpenAI({
    model: 'deepseek-v3.1',
    timeout: 60000,
    apiKey: 'sk-rC0COO68kf3Ws9Pj13AfBd975a1c4aDeA2584b135e8e9e75',
    configuration: {
      baseURL: 'https://www.gptapi.us/v1',
    },
  });
  return model;
};

export const getBaseAgent = () => {
  const model = getModel();
  return createAgent({
    model,
    tools: [getWeather]
  }) as ReactAgent;
};
