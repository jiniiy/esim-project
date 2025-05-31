"use client";

import { useRouter } from "next/navigation";
import { PlanCard } from "@/components";
import { Plan, FetchedPlans } from "@/types/plan";
import {
  Button,
  Container,
  Group,
  Modal,
  SimpleGrid,
  Tabs,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useCart } from "@/hooks/useCart";

type Props = {
  plans: FetchedPlans;
};

export default function PlansForCountryPage({ plans }: Props) {
  const router = useRouter();
  const { cart, addToCart } = useCart();
  const [opened, { open, close }] = useDisclosure(false);

  const handleGoToCart = () => {
    if (cart && cart.length > 0) {
      router.push("/cart");
    } else {
      open();
    }
  };

  const isSelected = (plan: Plan) => cart?.some((item) => item.id === plan.id);

  return (
    <Container>
      <Modal opened={opened} onClose={close} c="black" title="Notice" centered>
        <Text c="black">You should select more than one plan.</Text>
      </Modal>

      <Tabs defaultValue="FIXED_DAY">
        <Tabs.List>
          <Tabs.Tab value="FIXED_DAY">Fixed-Day</Tabs.Tab>
          <Tabs.Tab value="PER_DAY">Per-Day</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="FIXED_DAY" pt="sm">
          <Container className="my-6 h-150 overflow-scroll">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="md">
              {plans.FIXED_DAY.length > 0 ? (
                plans.FIXED_DAY.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    onAdd={() => addToCart(plan)}
                    selected={isSelected(plan)}
                  />
                ))
              ) : (
                <Text>No Plan for Fixed-Day</Text>
              )}
            </SimpleGrid>
          </Container>
        </Tabs.Panel>

        <Tabs.Panel value="PER_DAY" pt="sm">
          <Container className="my-6 h-150 overflow-scroll">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="md">
              {plans.PER_DAY.length > 0 ? (
                plans.PER_DAY.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    onAdd={() => addToCart(plan)}
                    selected={isSelected(plan)}
                  />
                ))
              ) : (
                <Text>No Plan for Per-Day</Text>
              )}
            </SimpleGrid>
          </Container>
        </Tabs.Panel>
      </Tabs>
      <Group justify="center" mt="xl">
        <Button onClick={() => router.back()}>Back</Button>
        <Button onClick={handleGoToCart}>Move to Cart</Button>
      </Group>
    </Container>
  );
}
