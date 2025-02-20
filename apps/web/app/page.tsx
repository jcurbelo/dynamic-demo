import Checkout from "@/app/components/Checkout";
import { Header } from "@/app/components/Header";
import { Providers } from "@/app/providers";

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen">
        <Header />
        <Checkout />
      </main>
    </Providers>
  );
}
