"use client";

import * as React from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches WebGL / Three.js render errors so they don't blow up the
 * entire page. Falls back to rendering nothing (the AuroraBackground
 * underneath shows through) or an optional custom fallback.
 */
export class ThreeErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // Log quietly — no console noise for the user
    if (typeof window !== "undefined") {
      console.debug("[ThreeErrorBoundary] 3D scene error:", error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}
