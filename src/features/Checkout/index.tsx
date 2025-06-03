"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Divider,
} from "@mantine/core";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice } = useCart();

  const handleSimulatePayment = () => {
    router.push("/thank-you");
  };

  return (
    <Container>
      <Title order={3} mb="sm">
        Order Summary
      </Title>

      <Divider mb="md" />

      <Stack>
        {cart?.map((item) => (
          <Group key={item.id} justify="space-between">
            <Text>
              {item.name}
              {item.country && ` - ${capitalizeFirstLetter(item.country.name)}`}
            </Text>
            <Text>${item.price.toFixed(2)}</Text>
          </Group>
        ))}
      </Stack>

      <Group justify="space-between" mt="xl">
        <Text fw={700}>Total: ${totalPrice.toFixed(2)}</Text>
        <Group gap={16}>
          <Button onClick={() => router.back()}>Back</Button>
          <Button onClick={handleSimulatePayment} disabled={!cart?.length}>
            Simulate Payment
          </Button>
        </Group>
      </Group>
    </Container>
  );
}
