import { copyFile, mkdir, readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { bundle } from "bunchee"

const cwd = fileURLToPath(new URL("../", import.meta.url))
const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8")
)

const componentEntries = Object.keys(packageJson.exports)
  .filter((entry) => entry !== "./styles")
  .map((entry) => entry === "." ? "./index" : entry)

await bundle("", {
  cwd,
  clean: true,
  _entryFilter: componentEntries
})

await mkdir(new URL("../dist/", import.meta.url), { recursive: true })
await copyFile(
  new URL("../src/styles.css", import.meta.url),
  new URL("../dist/styles.css", import.meta.url)
)
