"use client";

import { useCallback } from "react";
import fr from "../../messages/fr.json";

function getSection(
  obj: Record<string, unknown>,
  namespace: string
): Record<string, string> | null {
  const result = namespace
    .split(".")
    .reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object") {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
  if (result && typeof result === "object") {
    return result as Record<string, string>;
  }
  return null;
}

export function useTranslations(namespace: string) {
  const t = useCallback(
    (key: string, params?: Record<string, string>): string => {
      const section = getSection(
        fr as unknown as Record<string, unknown>,
        namespace
      );
      let value = section?.[key] ?? `${namespace}.${key}`;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          value = value.replace(`{${k}}`, v);
        });
      }
      return value;
    },
    [namespace]
  );

  return t;
}
