"use client";

import { login, logout } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";
import { Button, Group, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <Group justify="center" align="center">
      {user ? (
        <>
          <Text size="lg">Hello, {user.displayName}</Text>
          <Button color="red" variant="light" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={login} variant="filled" color="blue">
          Login
        </Button>
      )}
    </Group>
  );
}
