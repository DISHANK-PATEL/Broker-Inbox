import { KiteConnect } from "kiteconnect";

const apiKey = "";
const apiSecret = "";
let access_token = "";

const kc = new KiteConnect({ api_key: apiKey });

export async function placeOrder(tradingsymbol: string, quantity: number, type: "BUY" | "SELL") {
    try {
        kc.setAccessToken(access_token);

        // Step 1: Place the order
        const orderResp = await kc.placeOrder("regular", {
            exchange: "NSE",
            tradingsymbol,
            transaction_type: type,
            quantity,
            product: "CNC",
            order_type: "MARKET"
        });

        // Log the full order response to inspect its structure
        console.log("Full Order Response:", orderResp);

        // Check if the orderResp contains an 'order_id' directly
        if (orderResp && orderResp.order_id) {
            const orderId = orderResp.order_id;
            console.log("Order ID:", orderId);
            return `Order Placed! ID: ${orderId}`;
        } else {
            throw new Error("Order ID not found in response.");
        }

    } catch (err: any) {
        // Enhanced error logging
        console.error("Error occurred:", err);
        throw new Error("Order failed: " + (err.message || err));
    }
}
