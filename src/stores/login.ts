import { create } from "zustand";
import { persist } from "zustand/middleware";

type Info = Record<string, any> | null;

interface LoginState {
  isLogin: boolean
  userInfo: Info;
  token: string | null
  setUserInfo: (info: Info) => void;
  setIsLogin: (isLogin: boolean) => void
  setToken: (token: string | null) => void
}

const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      userInfo: null,
      isLogin: false,
      token:null,
      setUserInfo: (info) => set(() => ({ userInfo: info })),
      setIsLogin: (isLogin) => set(() => ({ isLogin: isLogin })),
      setToken: (token) => set(() => ({ token: token })),
    }),
    {
      name: "userInfo",
    }
  )
);

export default useLoginStore;
