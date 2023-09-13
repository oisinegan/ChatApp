import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      <h1>Chat app</h1>
      <h2>Chat with your friends</h2>
      <Link href="/Login">Login</Link>
      <Link href="/Register">Register</Link>
    </div>
  );
}
