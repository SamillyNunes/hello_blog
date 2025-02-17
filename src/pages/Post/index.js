import { useParams } from "react-router-dom";
import postsJson from "json/posts.json";
import ModelPost from "components/ModelPost";
import Markdown from "react-markdown";

import "./Post.css";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import SuggestedPosts from "components/SuggestedPosts";

export default function Post() {
  const params = useParams();

  const post = postsJson.find((p) => p.id === Number(params.id));

  if (!post) {
    return <NotFound />;
  }

  const suggestedPosts = postsJson.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <DefaultPage>
      <ModelPost
        coverImg={`/assets/posts/${post.id}/capa.png`}
        title={post.titulo}
      >
        {/* Como o texto do post eh atualizado de maneira dinamica, nao da para usar
              css em modulos ou derivados, precisa ser o tradicional */}
        <div className="post-markdown-container">
          <Markdown children={post.texto} />
        </div>

        <SuggestedPosts posts={suggestedPosts} />
      </ModelPost>
    </DefaultPage>
  );
}
