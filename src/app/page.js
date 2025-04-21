import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Compound from "@/app/compound/Compound";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href={'/render'}>Render Props</Link>
      <br />
      <Link href={'/slots'}>Slots</Link>
      <br />
      <Link href={'/compound'}>Compound</Link>
      <br />
      <Link href={'/func-as-child'}>Func as child</Link>
      <br />
      <Link href={'/proxy-component'}>Proxy Component</Link>
      <br />

    </div>
  );
}
