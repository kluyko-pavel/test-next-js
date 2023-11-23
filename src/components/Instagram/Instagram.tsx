import { IPost } from "@/types";
import styles from "./Instagram.module.scss";
import Image from "next/image";

export const Instagram = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className={styles.instagramWrapper}>
      <h1 className={styles.title}>Instagram</h1>
      <div className={styles.grid}>
        {posts.map((el: IPost) => (
          <div key={el.id} className={styles.postWrapper}>
            <Image
              src={el.image}
              fill
              style={{ objectFit: "contain" }}
              alt="Instagram picture"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
