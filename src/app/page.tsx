import styles from "./page.module.scss";
import Swiper from "@/components/Swiper/Swiper";
import { YaMap } from "@/components/YaMap/YaMap";
import { Instagram } from "@/components/Instagram/Instagram";
import { PostsService } from "@/services/posts.service";
import { CallForm } from "@/components/CallForm/CallForm";

export default async function HomePage() {
  const posts = await PostsService.getPosts();

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.flexContainer}>
          <Swiper />
          <Instagram posts={posts} />
        </div>
      </div>
      <YaMap />
      <CallForm />
    </main>
  );
}
