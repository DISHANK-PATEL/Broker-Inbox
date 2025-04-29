# BrokerInbox MCP Server

**BrokerInbox** is a multi-agent collaboration protocol (MCP) server that integrates AI agents (e.g., Claude or Cursor) with Gmail and Zerodha's Kite Connect API. Using natural language prompts, users can:

- **Read, send, delete, and analyze** Gmail messages
- **Place trades, fetch positions**, and **query market data** on Zerodha
- **Chain complex workflows** with optional LangChain/OpenAI Functions

---

## Core Features

1. **Gmail Integration**
   - OAuth2 authentication with `google-api-python-client` and `google-auth-oauthlib`
   - Fetch inbox, search by query, read message content
   - Send new emails or replies
   - Delete emails or move to trash
   - Analyze email content (sentiment, keyword extraction, summarization)

2. **Zerodha Trading**
   - Kite Connect REST API client via official `kiteconnect` SDK
   - Place market / limit orders
   - Fetch holdings, positions, and order history
   - Retrieve live market data (LTP, OHLC)

3. **LLM Orchestration**
   - Expose Gmail & Zerodha actions as callable HTTP endpoints
   - Claude / Cursor client connects to MCP server
   - Natural language prompt routing to appropriate tool
   - Integration with LangChain for complex chaining

4. **Session & Persistence**
   - Store OAuth tokens, trade logs, email history
---
## Flowchart:
![image](https://github.com/user-attachments/assets/9f347ee3-d74a-4230-b25f-2ec4ef8d30f1)
## Sequene Diagram:
![image](https://github.com/user-attachments/assets/64273d63-136d-4fb3-b846-e90acbc08eff)
## Use Case Diagram:
![image](https://github.com/user-attachments/assets/1a1ba91a-8b02-4a08-b413-73227a4df183)        ![image](https://github.com/user-attachments/assets/40e83241-8864-44bf-abfe-0301365261ef)

## Quick Start

1. **Clone & install**  
   ```bash
   git clone https://github.com/DISHANK-PATEL/Broker-Inbox.git
   cd project
   npm install
   bun index.ts
   Get the apiKey,apiSecret,access_token
   Enable Gmail API
   Configure OAuth Consent Screen

