import fr from "../../messages/fr.json";

type Messages = typeof fr;

type NestedKeyOf<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? NestedKeyOf<T[K], Prefix extends "" ? K : `${Prefix}.${K}`>
        : Prefix extends ""
          ? K
          : `${Prefix}.${K}`;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeyOf<Messages>;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const result = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  return typeof result === "string" ? result : path;
}

export function getTranslations(namespace: string) {
  const section = getNestedValue(
    fr as unknown as Record<string, unknown>,
    namespace
  );
  return function t(
    key: string,
    params?: Record<string, string>
  ): string {
    let value: string;
    if (typeof section === "object" && section !== null) {
      value =
        (section as Record<string, string>)[key] ?? `${namespace}.${key}`;
    } else {
      value = getNestedValue(
        fr as unknown as Record<string, unknown>,
        `${namespace}.${key}`
      );
    }
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        value = value.replace(`{${k}}`, v);
      });
    }
    return value;
  };
}
