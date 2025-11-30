import { HumanMessage } from "langchain";
import { getBaseAgent } from './LLM'

const agent = getBaseAgent();


const main = async () => {
  console.log('go here:', agent)
  for await (const [token, metadata] of await agent.stream({
    messages: [new HumanMessage('成都今天天气怎么样')]
  }, {
    streamMode: 'messages'
  })) {
    console.log(`node: ${metadata.langgraph_node}`);
    console.log(`content: ${JSON.stringify(token.contentBlocks, null, 2)}`);
  }
  
}


main()
