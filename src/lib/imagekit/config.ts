const rawEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT?.trim();

export const imageKitEndpoint = rawEndpoint?.replace(/\/$/, "") ?? null;

export function imageKitUrl(path: string): string {
  if (!imageKitEndpoint) {
    throw new Error(
      "NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT is required for ImageKit assets.",
    );
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${imageKitEndpoint}${normalizedPath}`;
}
