import { notFound } from "next/navigation";
import PlansForCountry from "@/features/PlansForCountry";
import type { FetchedPlans } from "@/types/plan";

type PageProps = {
  params: { country: string };
};

type PlansResponse = {
  data?: {
    plans?: FetchedPlans;
    [key: string]: unknown;
  };
};

export default async function Page({ params }: PageProps) {
  const { country: countrySlug } = await params;

  let res: Response;

  try {
    res = await fetch(
      `https://esim.gmobile.biz/api/v1/plans?country=${countrySlug}`,
      { cache: "no-store" },
    );
  } catch (error) {
    console.error("🔥 Network error:", error);
    return notFound();
  }

  if (!res.ok) {
    console.warn("🛑 API returned non-ok status:", res.status);
    return notFound();
  }

  let json: PlansResponse;
  try {
    json = await res.json();
  } catch (error) {
    console.error("🔥 Failed to parse JSON:", error);
    return notFound();
  }

  const plans = json?.data?.plans;

  if (!plans) return notFound();

  return <PlansForCountry plans={plans} />;
}
