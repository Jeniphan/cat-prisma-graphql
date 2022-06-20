import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post, NewPost, UpdatePost, NewUser, UpdateUser } from 'src/graphql';

@Resolver('Post')
export class PostResolver {

  constructor(private postService: PostService) { }

  @Query('users')
  async users() {
    const resolver = await this.postService.users()
    console.dir(resolver)
    return resolver
  }

  @Query('user')
  async user(@Args('id') args: string) {
    const resolver = await this.postService.user(args);
    return resolver
  }

  @Mutation('createUser')
  async createUser(@Args('input') args: NewUser) {
    return this.postService.createUser(args);
  }

  @Mutation('updateUser')
  async updateUser(@Args('input') args: UpdateUser) {
    return this.postService.updateUser(args);
  }

  @Mutation('deleteUser')
  async deleteUser(@Args('id') args: string) {
    return this.postService.deleteUser(args);
  }

  // Post
  @Query('posts')
  async posts() {
    return this.postService.posts();
  }

  @Query('post')
  async post(@Args('id') args: string) {
    const result = await this.postService.post(args);
    console.dir(result)
    return result
  }
  @Mutation('createPost')
  async create(@Args('input') args: NewPost) {
    return this.postService.createPost(args);
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost) {
    return this.postService.updatePost(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string) {
    return this.postService.deletePost(args);
  }
}
