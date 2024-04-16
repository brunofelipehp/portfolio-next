"use client";
import { ModalProvider } from "@/context/ModalProjectContext.";
import React from "react";

export const ProviderModal = ({ children }: { children: React.ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
