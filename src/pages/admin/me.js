import AdminAppLayout from '../../components/Layouts/AdminAppLayout'
import Head from 'next/head'
import { useAuth } from '../../hooks/admin_auth'

const Me = () => {
  const { logout, user } = useAuth({ middleware: 'auth' })

  return (
    <>
      <AdminAppLayout
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Me
          </h2>
        }>
        <Head>
          <title>Laravel - Admin</title>
        </Head>

        <h2>管理者情報</h2>
        <p>{user?.name}</p>

        <button onClick={logout}>Sign out</button>
      </AdminAppLayout>
    </>
  )
}

export default Me
