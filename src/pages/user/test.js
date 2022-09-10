import { useAuth } from '../../hooks/auth'

const Test = () => {
  const { logout, user } = useAuth({ middleware: 'auth' })

  return (
    <>
      <h2>テスト画面</h2>
      <p>{user?.name}</p>

      <button onClick={logout}>Sign out</button>
    </>
  )
}

export default Test