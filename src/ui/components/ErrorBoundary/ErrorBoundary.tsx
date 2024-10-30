import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";
import type { IErrorBoundaryProps, IErrorBoundaryState } from "./models/interfaces";

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): Record<string, boolean> {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(`Error caught by ErrorBoundary: ${JSON.stringify({ error, errorInfo })}`);
  }

  public render(): ReactNode {
    return this.state.hasError ? <h1>Something went wrong</h1> : this.props.children;
  }
}
