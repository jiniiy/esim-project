"use client";

import { useCart } from "@/hooks/useCart";
import { Container, Stack, Text, Title, Button } from "@mantine/core";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Container>
      <Stack align="center" justify="center" h="80vh">
        <Title order={1}>Thank you!</Title>
        <Text size="lg">
          Your eSIM purchase has been simulated successfully.
        </Text>
        <Button component={Link} href="/">
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
}
