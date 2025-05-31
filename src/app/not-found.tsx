import { Button, Container, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container size="sm" pt={100}>
      <Stack align="center">
        <Title order={1}>404 - Page Not Found</Title>
        <Text c="dimmed" ta="center">
          The page you are looking for does not exist or has been moved.
        </Text>
        <Button component={Link} href="/" variant="light" size="md">
          Go back to homepage
        </Button>
      </Stack>
    </Container>
  );
}
