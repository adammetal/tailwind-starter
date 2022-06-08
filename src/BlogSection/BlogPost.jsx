import { Article, Author, Content, Title } from "../ui-kit/Article";
import { AlertButton, Button } from "../ui-kit/Button";
import { Panel } from "../ui-kit/Panel";

function BlogPost({ title, author, content }) {
  return (
    <Article>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Content>
        <span dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
      <Panel>
        <Button>Comment</Button>
        <AlertButton>Delete</AlertButton>
        <Button color="black-100">Unicorn</Button>
      </Panel>
    </Article>
  );
}

export default BlogPost;
