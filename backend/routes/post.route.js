import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createPost, deletePost, commentOnPost, likeUnlikePost, getAllPosts, getLakedPosts, getFollowingPosts, getUserPosts } from '../controlers/post.controller.js';

const router = express.Router()

router.get("/all", protectRoute, getAllPosts)
router.get("/following", protectRoute, getFollowingPosts)
router.get("/likes/:id", protectRoute, getLakedPosts)
router.get("/user/:username", protectRoute, getUserPosts)
router.post("/create", protectRoute, createPost)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.post("/comment/:id", protectRoute, commentOnPost)
router.delete("/:id", protectRoute, deletePost)

export default router