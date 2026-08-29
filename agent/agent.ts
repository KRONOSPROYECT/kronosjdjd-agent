import { defineAgent } from "eve";

export default defineAgent({
  model: "alibaba/qwen-3-32b",
  modelOptions: {
    providerOptions: {
      gateway: { zeroDataRetention: true },
    },
  },
});
