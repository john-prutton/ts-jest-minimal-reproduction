import { isEven } from "./util"

export function isOdd(n: number): boolean {
  return !isEven(n)
}
