"use client";

import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect, use } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signInUrl: string;
  calbackUrl: string;
  signInUrlParam: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProvider = async () => {
      const res = await getProviders();
      console.log(res);

      setProviders(res);
    };

    fetchProvider();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i}>(provider.id)</button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
