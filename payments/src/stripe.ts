import Stripe from "stripe";

process.env.TEST_DATA = "hnfrAm8rOkryFEnV23jjfFlw";

export const stripe = new Stripe("sk_test_hnfrAm8rOkryFEnV23jjfFlw", {
  apiVersion: "2024-09-30.acacia",
});
