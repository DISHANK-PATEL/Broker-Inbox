import { placeOrder } from "./trade";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

server.tool("Buy-a-stock","Buys the stock for the user on the Zerodha exchange",
  {
    stock: z.string(),
    qty: z.number()
  },
  async ({ stock, qty }) => {
    await placeOrder(stock, qty, "BUY"); // Added 'await' because placeOrder sounds async
    return {
      content: [{ type: "text", text: "Stock has been bought" }]
    };
  }
);

server.tool("Sell-a-stock","Sells the stock for the user on the Zerodha exchange",
{
    stock: z.string(),
    qty: z.number()
  },
  async ({ stock, qty }) => {
    await placeOrder(stock, qty, "SELL"); // Added 'await' here too
    return {
      content: [{ type: "text", text: "Stock has been sold" }]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
