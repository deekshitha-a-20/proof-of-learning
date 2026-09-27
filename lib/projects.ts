export type Project = {
  slug: string
  title: string
  pitch: string
  stack: string[]
  githubUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'mongodb-rag-mcp',
    title: 'mongodb-rag-mcp',
    pitch:
      'RAG system on MongoDB Atlas Vector Search with local embeddings, exposed as an MCP server and a web API.',
    stack: ['MongoDB', 'TypeScript', 'MCP', 'Vector search'],
    githubUrl: 'https://github.com/deeksithaa/mongodb-rag-mcp',
    // demoUrl: '/demo' — add this back once the static-embeddings demo route ships
  },
  {
    slug: 'mongo-mcp-server',
    title: 'mongo-mcp-server',
    // Placeholder pitch — swap in the real one-liner for this repo.
    pitch: 'MCP server for querying MongoDB collections through natural language.',
    stack: ['MongoDB', 'MCP', 'Node.js'],
    githubUrl: 'https://github.com/deeksithaa/mongo-mcp-server',
  },
  {
    slug: 'playwright-ada-mcp',
    title: 'playwright-ada-mcp',
    // Placeholder pitch — swap in the real one-liner for this repo.
    pitch: 'MCP server for automated accessibility testing with Playwright.',
    stack: ['Playwright', 'Accessibility', 'MCP'],
    githubUrl: 'https://github.com/deeksithaa/playwright-ada-mcp',
  },
]
