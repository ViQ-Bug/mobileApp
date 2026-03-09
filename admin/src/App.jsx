import React from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

function App() {
  return (
    <div>
      <h1>ADMIN</h1>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="your-style-here">Đăng nhập</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="your-style-here">Đăng Ký</button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}

export default App;
