import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import { Post } from "./entity/Post";

const options: ConnectionOptions = {
  type: "sqlite",
  database: "user.db",
  entities: [Post],
};

createConnection(options).then(
    (connection) => {
        const post = new Post();
        post.text = "Hello how are you?";
        post.title = "hello";
        post.likesCount = 100;

        const postRepository = connection.getRepository(Post);

        postRepository
            .save(post)
            // tslint:disable-next-line:no-shadowed-variable
            .then((post) => console.log("Post has been saved: ", post))
            .catch((error) => console.log("Cannot save. Error: ", error));
    },
    (error) => console.log("Cannot connect: ", error),
);
