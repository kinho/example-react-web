import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useUserStore = create()(
  persist(
    devtools(set => ({
      user: false,
      setUser: (user) =>
        set({ user }),
    })),
    { name: 'example-storage' }
  )
)

export default useUserStore
