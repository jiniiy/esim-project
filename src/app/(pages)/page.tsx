"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button, Container, SimpleGrid } from "@mantine/core";
import { useAuth } from "@/context/AuthContext";
import { COUNTRIES } from "@/constants";
import { useEffect } from "react";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleCountryClick = (country: string) => {
    if (!user) {
      alert("You need log-in");
      return;
    }

    router.push(`/country/${country}`);
  };

  useEffect(() => {
    const redirectFrom = searchParams.get("redirect");
    if (redirectFrom) {
      router.replace("/");
      alert(`login required to access ${redirectFrom}`);
    }
  }, []);

  return (
    <Container className="p-10">
      <SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing="md">
        {COUNTRIES.map((country) => (
          <Button
            key={country}
            variant="outline"
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </Button>
        ))}
      </SimpleGrid>
    </Container>
  );
}
