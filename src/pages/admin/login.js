import ApplicationLogo from '../../components/ApplicationLogo'
import AuthCard from '../../components/AuthCard'
import AuthSessionStatus from '../../components/AuthSessionStatus'
import Button from '../../components/Button'
import GuestLayout from '../../components/Layouts/GuestLayout'
import Input from '../../components/Input'
import InputError from '../../components/InputError'
import Label from '../../components/Label'
import Link from 'next/link'
import { useAuth } from '../../hooks/admin_auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/admin',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset))
    } else {
      setStatus(null)
    }
  })

  const submitForm = async event => {
    console.log('submitForm')
    event.preventDefault()

    login({ email, password, remember: shouldRemember, setErrors, setStatus })
  }

  return (
    <GuestLayout>
      <AuthCard>
        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />

        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              value={email}
              className="block mt-1 w-full"
              onChange={event => setEmail(event.target.value)}
              required
              autoFocus
            />

            <InputError messages={errors.email} className="mt-2" />
          </div>

          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              value={password}
              className="block mt-1 w-full"
              onChange={event => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />

            <InputError messages={errors.password} className="mt-2" />
          </div>

          <div className="flex items-center justify-end mt-4">
            <Button className="ml-3">Login</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}

export default Login
