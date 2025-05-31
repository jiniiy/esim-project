"use client";

import { useRouter } from "next/navigation";
import { Button, Container, SimpleGrid } from "@mantine/core";
import { useAuth } from "@/context/AuthContext";
import { COUNTRIES } from "@/constants";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleCountryClick = (country: string) => {
    if (!user) {
      alert("You need log-in");
      return;
    }

    router.push(`/country/${country}`);
  };

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
