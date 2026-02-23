import { createContext, useContext, useState, type ReactNode } from "react";
import {
  detectClientPlatform,
  detectMobileOrTabletClient,
  type PlatformKey,
} from "@/lib/releases";

type ClientPlatformContextValue = {
  detectedPlatform: PlatformKey | null;
  isMobileClient: boolean;
};

const ClientPlatformContext = createContext<ClientPlatformContextValue>({
  detectedPlatform: null,
  isMobileClient: false,
});

export const ClientPlatformProvider = ({ children }: { children: ReactNode }) => {
  const [value] = useState<ClientPlatformContextValue>(() => ({
    detectedPlatform: detectClientPlatform(),
    isMobileClient: detectMobileOrTabletClient(),
  }));

  return (
    <ClientPlatformContext.Provider value={value}>
      {children}
    </ClientPlatformContext.Provider>
  );
};

export const useClientPlatform = () => useContext(ClientPlatformContext);
