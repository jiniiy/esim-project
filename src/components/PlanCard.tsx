"use client";

import { Button, Card, Text } from "@mantine/core";
import type { Plan } from "@/types/plan";

type Props = {
  plan: Plan;
  onAdd: () => void;
  selected?: boolean;
};

export default function PlanCard({ plan, onAdd, selected = false }: Props) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={600}>{plan.name}</Text>
      <Text>
        {plan.dataVolume}
        {plan.dataUnit} • Valid for {plan.validityDays}
        {plan.validityDaysCycle}
      </Text>
      <Text>${plan.price.toFixed(2)}</Text>
      <Button
        mt="md"
        fullWidth
        onClick={onAdd}
        disabled={selected}
        variant={selected ? "light" : "filled"}
      >
        {selected ? "Selected" : "Add to Cart"}
      </Button>
    </Card>
  );
}
