// services/blogService.js

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(BASE_URL)

const client = axios.create({
  baseURL: `${BASE_URL}/blogs`,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all blogs
 * @param {object} [params] - Optional query parameters
 */
export async function getAllBlogs(params = {}) {
  const res = await client.get('/', { params });
  return res.data;
}

/**
 * Create a new blog post
 * @param {{ title: string, content?: string }} data 
 */
export async function createBlog(data) {
  try {
    const res = await client.post('/generate', data);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to create blog');
  }
}

/**
 * Delete a blog post by ID
 * @param {string} id 
 */
export async function deleteBlog(id) {
  try {
    await client.delete(`/${id}`);
    return true;
  } catch {
    throw new Error('Failed to delete blog');
  }
}

/**
 * Fetch a single blog post by ID
 * @param {string} id
 */
export async function getBlogById(id) {
  const res = await client.get(`/${id}`);
  return res.data;
}