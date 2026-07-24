"use client";

import * as React from "react";

/**
 * Custom-styled icon wrappers so we can use lucide icons with a consistent
 * size + stroke aesthetic in the stats / achievements sections.
 */
import { Trophy, Award, BadgeCheck } from "lucide-react";

export { Trophy, Award };

export function CertificateIcon({ className }: { className?: string }) {
  return <BadgeCheck className={className} />;
}
