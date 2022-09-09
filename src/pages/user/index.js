import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'

const User = () => {
  const { logout, user } = useAuth({ middleware: 'auth' })

  return (
    <>
      <AppLayout
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Users
          </h2>
        }>
        <Head>
          <title>Laravel - Users</title>
        </Head>

        <h2>ユーザー画面</h2>
        <p>{user?.name}</p>

        <button onClick={logout}>Sign out</button>
      </AppLayout>
    </>
  )
}

export default User
