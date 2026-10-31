export function pct(rate: number, digits = 1): string {
  return `${(rate * 100).toFixed(digits)}%`;
}

export function fraction(n: number, d: number): string {
  return `${n}/${d}`;
}

export function cweId(cwe: string): string {
  return cwe.replace(/^CWE-/, "");
}

export function cweHref(cwe: string): string {
  return `https://cwe.mitre.org/data/definitions/${cweId(cwe)}.html`;
}

export function langLabel(lang: string): string {
  if (lang === "javascript") return "JavaScript";
  if (lang === "python") return "Python";
  if (lang === "go") return "Go";
  return lang;
}

export function projectLabel(id: string): string {
  const map: Record<string, string> = {
    "01_auth_api": "Auth API",
    "02_file_service": "File service",
    "03_db_search": "DB search",
    "04_health_monitor": "Health monitor",
    "05_session_handler": "Session handler",
    "06_control": "Control",
  };
  return map[id] ?? id;
}
