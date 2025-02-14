import { useParams } from "react-router-dom";
import postsJson from "json/posts.json";
import ModelPost from "components/ModelPost";
import Markdown from "react-markdown";

import './Post.css';

export default function Post() {
  const params = useParams();

  const post = postsJson.find((p) => p.id === Number(params.id));

  if(!post){
    return <h1>Post não encontrado</h1>;
  }

  return (
    <ModelPost
      coverImg={`/assets/posts/${post.id}/capa.png`}
      title={post.titulo}
    >
        {/* Como o texto do post eh atualizado de maneira dinamica, nao da para usar
        css em modulos ou derivados, precisa ser o tradicional */}
      <div className="post-markdown-container">
        <Markdown children={post.texto} />
      </div>
    </ModelPost>
  );
}
