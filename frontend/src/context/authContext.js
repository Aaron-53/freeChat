import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { validateToken } from "@/util/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    retreiveUser();
  }, []);

  const retreiveUser = async () => {
    const token = Cookies.get("authorized");
    if (token) {
      const user = await validateToken();
      setUser({ user });
      router.push("/chatspace");
    } else {
      if (router.pathname !== "/login" && router.pathname !== "/signup") {
        router.push("/login");
      }
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
