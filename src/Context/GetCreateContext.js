import React from "react";

export const GetsContext = React.createContext();

export const GetsProvider = props => {
  const getUsers = async () => {
    return await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=wXVFEB9HcW28HVSyyWjafMLdV4MtLYnNaFM0tIllKPxKAgwbBgEgDRLnCdRa1F9Zem_ZTn4RJQ91GdlqNdOF5qC3RCnRBX5hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO0UvMmq2wv0v1ZHurHxFZUVOUMrSQWHYIieuSoJwJOIuTxMoGStHdLmsAof0aYorTSclyNGwvp9agiTOl1idf0okM37iWSKnNz9Jw9Md8uu&lib=MuyQ5cFQ1E3KZyQWP_7gHWYgiyystZJk7")
      .then(res => res.json())
      .then(result => result)
      .catch(error => console.log("error happened", error));
  };


  

  return (
    <GetsContext.Provider value={{ getUsers }}>
      {props.children}
    </GetsContext.Provider>
  );
};