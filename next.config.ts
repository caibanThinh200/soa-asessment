const withNextIntl = require("next-intl/plugin")("./src/i8n/request.ts");
import type { NextConfig } from "next";

const nextConfig: NextConfig = withNextIntl({
  /* config options here */
});

export default nextConfig;
