"use client";

import { Group, Title } from "@mantine/core";
import LoginButton from "./LoginButton";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  let title = "eSIM Storefront";

  if (pathname.startsWith("/country")) {
    const parts = pathname.split("/");
    const country = parts[2];
    title = `Plans for ${country?.toUpperCase()}`;
  } else if (pathname === "/cart") {
    title = "Cart";
  } else if (pathname === "/checkout") {
    title = "Checkout";
  } else if (pathname === "/thank-you") {
    title = "Thank You";
  }
  return (
    <Group
      justify="space-between"
      align="center"
      className="w-full h-full px-6"
    >
      <Title order={1}>{title}</Title>
      <LoginButton />
    </Group>
  );
}
