export type Weights = "open" | "proprietary";

export const VENDOR_COLORS: Record<string, { color: string; muted: string }> = {
  Anthropic: { color: "#C17A56", muted: "#E4C2AE" },
  OpenAI: { color: "#10A37F", muted: "#9AD4C2" },
  xAI: { color: "#171717", muted: "#9CA3AF" },
  Alibaba: { color: "#A855F7", muted: "#D8B4FE" },
  Google: { color: "#34A853", muted: "#A7E3B8" },
  DeepSeek: { color: "#4D7CFE", muted: "#A8C1FF" },
  Meta: { color: "#0668E1", muted: "#93C5FD" },
};

const MODEL_META: Record<
  string,
  { vendor: string; weights: Weights; logo: string; short: string }
> = {
  "claude-sonnet-4.5": {
    vendor: "Anthropic",
    weights: "proprietary",
    logo: "/logos/claude.svg",
    short: "Claude Sonnet 4.5",
  },
  "gpt-5.6-luna": {
    vendor: "OpenAI",
    weights: "proprietary",
    logo: "/logos/chatgpt.png",
    short: "GPT-5.6 Luna",
  },
  "grok-4.7": {
    vendor: "xAI",
    weights: "proprietary",
    logo: "/logos/grok.jpg",
    short: "Grok 4.7",
  },
  "qwen3-coder-next": {
    vendor: "Alibaba",
    weights: "proprietary",
    logo: "/logos/qwen.png",
    short: "Qwen3-Coder Next",
  },
  "gemini-3.5-flash-lite": {
    vendor: "Google",
    weights: "proprietary",
    logo: "/logos/gemini.svg",
    short: "Gemini 3.5 Flash-Lite",
  },
  "deepseek-v4-pro": {
    vendor: "DeepSeek",
    weights: "open",
    logo: "/logos/deepseek.png",
    short: "DeepSeek V4 Pro",
  },
  "llama3.1-8b": {
    vendor: "Meta",
    weights: "open",
    logo: "/logos/llama.svg",
    short: "Llama 3.1 8B",
  },
  "qwen2.5-coder-1.5b": {
    vendor: "Alibaba",
    weights: "open",
    logo: "/logos/qwen.png",
    short: "Qwen2.5 1.5B",
  },
  "qwen2.5-coder-7b": {
    vendor: "Alibaba",
    weights: "open",
    logo: "/logos/qwen.png",
    short: "Qwen2.5 7B",
  },
};

export function modelMeta(id: string) {
  return (
    MODEL_META[id] ?? {
      vendor: "Unknown",
      weights: "proprietary" as Weights,
      logo: "",
      short: id,
    }
  );
}

export function vendorColor(vendor: string) {
  return VENDOR_COLORS[vendor]?.color ?? "#71717a";
}

export function colorForMode(
  mode: "vendor" | "weights" | "type",
  opts: { vendor: string; weights: Weights; type: string }
) {
  if (mode === "weights") return opts.weights === "open" ? "#4D7CFE" : "#C17A56";
  if (mode === "type") return opts.type === "SLM" ? "#e11d2e" : "#171717";
  return vendorColor(opts.vendor);
}

export const CWE_SHORT: Record<string, string> = {
  "CWE-319": "Cleartext",
  "CWE-489": "Debug code",
  "CWE-94": "Code injection",
  "CWE-502": "Deserialization",
  "CWE-78": "Command inj.",
  "CWE-703": "Error handling",
  "CWE-22": "Path traversal",
  "CWE-605": "Port bind",
  "CWE-668": "Wrong sphere",
  "CWE-79": "XSS",
  "CWE-259": "Hard-coded pwd",
  "CWE-73": "File name",
  "CWE-798": "Hard-coded creds",
  "CWE-89": "SQL injection",
  "CWE-95": "Eval injection",
  "CWE-522": "Weak credentials",
};

export function heatBlue(n: number, max: number) {
  if (max <= 0) return { bg: "#1e3a8a", fg: "#fff" };
  const t = 1 - n / max;
  const r = Math.round(219 + (30 - 219) * t);
  const g = Math.round(234 + (58 - 234) * t);
  const b = Math.round(254 + (138 - 254) * t);
  const fg = t > 0.45 ? "#fff" : "#1e3a8a";
  return { bg: `rgb(${r},${g},${b})`, fg };
}
