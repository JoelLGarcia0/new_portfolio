export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SystemProfileEntry {
  key: string;
  value: string;
}

export interface CommandOutput {
  command: string;
  output: string[];
}

export interface TerminalLine {
  id: number;
  command: string;
  output: string[];
}
