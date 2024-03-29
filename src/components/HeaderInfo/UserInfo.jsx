import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const UserInfo = () => {
  /*****************************************************************************
   *
   * Use States, Context & Variables
   *
   ****************************************************************************/

  const { userInfo, logout } = useAuth();

  /*****************************************************************************
   *
   * Fetches
   *
   ****************************************************************************/

  /*****************************************************************************
   *
   * Input Handlers
   *
   ****************************************************************************/

  /*****************************************************************************
   *
   * useEffect (onMount)
   *
   ****************************************************************************/

  /*****************************************************************************
   *
   * React stuffs
   *
   ****************************************************************************/
  return (
    <>
      {userInfo.accountId && (
        <>
          Credits: {userInfo.credits}, {userInfo.symbol}
          <a href="/">
            <button onClick={logout}>Logout</button>
          </a>
        </>
      )}
    </>
  );
};

export default UserInfo;
