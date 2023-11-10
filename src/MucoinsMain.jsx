import { AuthContextProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"




export const MucoinsMain = () => {
  return (
    <AuthContextProvider>
        <AppRouter/>
    </AuthContextProvider>
  )
}
