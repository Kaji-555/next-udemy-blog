import { Suspense } from "react"
import LoginForm from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <Suspense>
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </Suspense>
  )
}