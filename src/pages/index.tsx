import { Hero } from "@/components/sections/hero";
import { Resolver } from "@/components/sections/resolved";
import { Result } from "@/components/sections/result";
import MainLayout from "@/layouts/main";
import { method } from "@/lib/constants";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      {method === "walletBased" ? <Result /> : <Resolver />}
    </MainLayout>
  );
}
