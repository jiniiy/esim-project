"use client";

import { Container, Stack, Text, Title, Button } from "@mantine/core";

export default function ThankYouPage() {
  return (
    <Container>
      <Stack align="center" justify="center" h="80vh">
        <Title order={1}>Thank you!</Title>
        <Text size="lg">
          Your eSIM purchase has been simulated successfully.
        </Text>
        <Button component="a" href="/">Back to Home</Button>
      </Stack>
    </Container>
  );
}
