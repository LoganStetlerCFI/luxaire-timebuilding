// Mirrors the basePath logic in next.config.ts. With images.unoptimized set
// (required for static export), next/image does not automatically prefix
// local src paths with basePath, so we do it manually wherever a local
// static asset is passed to <Image src="...">.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/luxaire-timebuilding";

export const basePath = isGithubPages ? repoBasePath : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
