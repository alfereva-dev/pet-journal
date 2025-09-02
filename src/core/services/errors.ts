export class AppError extends Error {
  constructor(
    message: string,
    public readonly code:
      | "NOT_FOUND"
      | "NETWORK"
      | "VALIDATION"
      | "UNKNOWN" = "UNKNOWN",
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "AppError";
  }
}
