import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useUserStore = create()(
  devtools(set => ({
    user: false,
    setUser: (user) =>
      set({ user }),
  })),
)

export default useUserStore
