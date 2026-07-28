export class Stopwatch {
  private startTime: number = 0;
  private pausedStart: number = 0;
  private pausedTime: number = 0;
  private isPaused: boolean = false;

  public start(): void {
    this.startTime = Date.now();
  }

  public elapsed(): number {
    if (this.isPaused) {
      return ((this.pausedStart - this.startTime) - this.pausedTime);
    } else {
      return ((Date.now() - this.startTime) - this.pausedTime);
    }
  }

  public pause(): void {
    this.pausedStart = Date.now();
    this.isPaused = true;
  }

  public play(): void {
    const result = Date.now() - this.pausedStart;
    this.pausedTime += result;
    this.isPaused = false;
  }

  public isItPaused(): boolean {
    return this.isPaused;
  }
}


export function format(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts: string[] = [];

  if (hours > 0) {
    if (hours === 1) {
      parts.push(`${hours} hour`);

    } else {
      parts.push(`${hours} hours`);
    }
    if (minutes === 1) {
      parts.push(`${minutes} minute`);
    } else {
      parts.push(`${minutes} minutes`);
    }
  } else if (minutes > 0) {
    if (minutes === 1) {
      parts.push(`${minutes} minute`);
    } else {
      parts.push(`${minutes} minutes`);
    }
    if (seconds === 1) {
      parts.push(`${seconds} second`);
    } else {
      parts.push(`${seconds} seconds`);
    }
  } else {
    if (seconds === 1) {
      parts.push(`${seconds} second`);
    } else {
      parts.push(`${seconds} seconds`);
    }
  }

  return parts.join(", ");
}
