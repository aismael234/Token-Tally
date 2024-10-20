"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import Link from "next/link";

let sdk: W3SSdk;

export default function Home() {
  useEffect(() => {
    sdk = new W3SSdk(
      {
        appSettings: { appId: "someAppId" },
        authentication: {
          userToken: "someUserToken",
          encryptionKey: "someEncryptionKey",
        },
      },
      (error: any, result: any) => {
        if (error) {
          toast.error(`Social Login Error: ${error.message ?? "Error!"}`);
          return;
        }
        toast.success(`Social Login Success: ${result?.userToken}`);
      }
    );
  }, []);

  const [appId, setAppId] = useState(
    localStorage.getItem("appId") || "someAppId"
  );
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken") || "someUserToken"
  );
  const [encryptionKey, setEncryptionKey] = useState(
    localStorage.getItem("encryptionKey") || "someEncryptionKey"
  );
  const [challengeId, setChallengeId] = useState(
    localStorage.getItem("challengeId") || "someChallengeId"
  );

  const onChangeHandler = useCallback(
    (setState: React.Dispatch<React.SetStateAction<string>>, key: string) =>
      (e: any) => {
        const value = e.target.value;
        setState(value);
        localStorage.setItem(key, value);
      },
    []
  );

  const bgWhite = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white", // Set background color
      "& fieldset": {
        borderColor: "white", // Set border color
      },
    },
  };

  const onSubmit = useCallback(() => {
    sdk.setAppSettings({ appId });
    sdk.setAuthentication({ userToken, encryptionKey });

    sdk.execute(challengeId, (error, result) => {
      if (error) {
        toast.error(`Error: ${error?.message ?? "Error!"}`);
        return;
      }
      toast.success(`Challenge: ${result?.type}, Status: ${result?.status}`);
    });
  }, [appId, userToken, encryptionKey, challengeId]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex p-4 justify-center items-center">
        <TextField
          label="App Id"
          onChange={onChangeHandler(setAppId, "appId")}
          value={appId}
          sx={bgWhite}
        />
        <TextField
          label="User Token"
          onChange={onChangeHandler(setUserToken, "userToken")}
          value={userToken}
          sx={bgWhite}
        />
        <TextField
          label="Encryption Key"
          onChange={onChangeHandler(setEncryptionKey, "encryptionKey")}
          value={encryptionKey}
          sx={bgWhite}
        />
        <TextField
          label="Challenge Id"
          onChange={onChangeHandler(setChallengeId, "challengeId")}
          value={challengeId}
          sx={bgWhite}
        />
        <Button
          className="align-"
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Verify Challenge
        </Button>
      </div>
      <Link
        className="p-4 font-bold text-xl bg-black rounded-lg hover:cursor-pointer"
        href="/judging/46ab42f2cc3a6a3fb2"
      >
        Connect Wallet
      </Link>
    </div>
  );
}
