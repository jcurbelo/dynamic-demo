"use client";

import {
  CrossmintEmbeddedCheckout,
  useDynamicContext,
} from "@dynamic-demo/config";

const collectionId = process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID as string;

export default function Checkout() {
  const { primaryWallet } = useDynamicContext();
  const isAuthenticated = !!primaryWallet;

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen p-6 bg-white">
      <div className="max-w-[450px] w-full">
        <CrossmintEmbeddedCheckout
          lineItems={{
            collectionLocator: `crossmint:${collectionId}`,
            callData: {
              totalPrice: "0.001",
              quantity: 1,
            },
          }}
          payment={{
            crypto: { enabled: true },
            fiat: { enabled: true },
          }}
        />
      </div>
    </div>
  );
}
