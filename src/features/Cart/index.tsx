"use client";

import { useRouter } from "next/navigation";
import { Button, Card, Container, Group, Stack, Text } from "@mantine/core";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <Container>
      <Stack>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between">
                <div>
                  <Text fw={600}>
                    {item.name}
                    {item.country &&
                      ` - ${capitalizeFirstLetter(item.country.name)}`}
                  </Text>
                  <Text>${item.price.toFixed(2)}</Text>
                </div>
                <Button
                  color="red"
                  variant="outline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Group>
            </Card>
          ))
        ) : (
          <Text>No plans selected. Please add some.</Text>
        )}
      </Stack>

      <Group justify="space-between" mt="xl">
        <Text fw={700}>Total: ${totalPrice.toFixed(2)}</Text>
        <Group gap={16}>
          <Button onClick={() => router.back()}>Back</Button>
          <Button
            disabled={cart.length === 0}
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </Button>
        </Group>
      </Group>
    </Container>
  );
}
