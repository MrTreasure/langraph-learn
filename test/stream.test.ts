import { describe, it, beforeAll, expect } from '@jest/globals'
import { getBaseAgent } from '../src/LLM'
import { HumanMessage, ReactAgent } from 'langchain'

describe('stream print', () => {
  let agent: ReactAgent
  beforeAll(() => {
    agent = getBaseAgent()
  })

  it('stream by messages', async () => {
      for await (const [token, metadata] of await agent.stream(
        {
          messages: [new HumanMessage('成都今天天气怎么样')],
        },
        {
          streamMode: 'messages',
        }
      )) {
        console.log(`node: ${metadata.langgraph_node}`);
        console.log(`content: ${JSON.stringify(token.contentBlocks, null, 2)}`);
        expect(metadata.langgraph_node).toBeTruthy();
      }
  })
})