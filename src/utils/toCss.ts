import { Space } from "@/types";

export const toCss = (v?: Space) => (typeof v === 'number' ? `${v}px` : v);
