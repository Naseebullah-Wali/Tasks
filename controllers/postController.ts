import express from 'express'
import BlogPost from '../models/blogpost';
import User from '../models/user';
const jwt = require('jsonwebtoken')



export class postController {


    public static addPost =  async (req: express.Request, res: express.Response) => {
        try {
          const { recordingDate, message } = req.body;
      
          // Retrieve the author ID from the authenticated user's token
          const token = req.headers.authorization?.split(' ')[1];
          const decodedToken = jwt.verify(token, process.env.SECRETKEY) as { id: number };
          const authorId = decodedToken.id;
      
          // Create the blog post with the associated author ID
          const blogPost = await BlogPost.create({ recordingDate, message, authorId });
      
          res.status(201).json({ message: 'Blog post created successfully', blogPost });
        } catch (error) {
          console.log('Error creating blog post:', error);
          res.status(500).json({ message: 'Error occurred while creating the blog post' });
        }
      }

    public static getPost =  async (req: express.Request, res: express.Response) => {
        const page = parseInt(req.query.page as string) || 1; // Current page number, default is 1
        const limit = parseInt(req.query.limit as string) || 20; // Number of posts per page, default is 20
      
        try {
          const offset = (page - 1) * limit; // Calculate the offset based on the current page and limit
      
          // Fetch blog posts with pagination
          const blogPosts = await BlogPost.findAndCountAll({
            offset,
            limit,
            include: [{ model: User, as: 'author' }],
          });
      
          // Calculate total pages based on the count of blog posts and the limit per page
          const totalPages = Math.ceil(blogPosts.count / limit);
      
          res.status(200).json({
            page,
            totalPages,
            posts: blogPosts.rows,
          });
        } catch (error) {
          console.log("Error fetching blog posts:", error);
          res.status(500).json({ message: "Error fetching blog posts" });
        }
      };


      public static updatePost = async (req: express.Request, res: express.Response) => {
        const postId = parseInt(req.params.id);
        const { recordingDate, message } = req.body;
        const userId = (req as any).userId;
      
        try {
          const blogPost = await BlogPost.findOne({ where: { id: postId, authorId: userId } });
      
          if (!blogPost) {
            return res.status(404).json({ message: 'Blog post not found.' });
          }
      
          blogPost.recordingDate = recordingDate;
          blogPost.message = message;
          await blogPost.save();
      
          res.json(blogPost);
        } catch (error) {
          console.error('Error updating blog post:', error);
          res.status(500).json({ message: 'Error occurred while updating the blog post.' });
        }
      }



      public static deletePost = async (req: express.Request, res: express.Response) => {
        const postId = parseInt(req.params.id);
        const userId = (req as any).userId;
      
        try {
            const blogPost = await BlogPost.findOne({ where: { id: postId, authorId: userId } });

            if (!blogPost) {
              return res.status(404).json({ message: 'Blog post not found.' });
            }
        
            await blogPost.destroy();
        
            res.json({ message: 'Blog post deleted successfully.' });
          } catch (error) {
            console.error('Error deleting blog post:', error);
            res.status(500).json({ message: 'Error occurred while deleting the blog post.' });
          }
      }

      
  
}