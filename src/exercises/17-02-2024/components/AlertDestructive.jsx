import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDestructive({text, span}) {
  return (
    <Alert variant="destructive" className={`${span} py-1 rounded-sm`}>
      <ExclamationTriangleIcon className="" />
      <AlertDescription className="">
        {text}
      </AlertDescription>
    </Alert>
  )
}
