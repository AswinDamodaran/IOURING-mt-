"use cient";

import React from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <>
      <Toaster
      position="bottom-center"
        toastOptions={{
          success: {
            style: {
              background: "#232526",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#232526",
              color: "#fff",
            },
          },
        }}
      />
      {children}
    </>
  );
}
