import React, { useState, useCallback, useEffect } from 'react';
import styles from './styles.module.css';

/* Router */
import Router from 'next/router';

const BlogCardForm = ({ post }) => {
  const blogCardFormClick = useCallback((e) => {
    e.preventDefault();

    if (post) {
      Router.push(`/Blog/CaseStudy/Detail/${post.id}`);
    }
  }, [post])

  return (
    <div className={styles.card} onClick={blogCardFormClick}>
      <div className={styles.cover}>
        {post.Images[0] && <img role="presentation" src={`http://localhost:3065/${post.Images[0]?.src}`} alt={post.Images[0]?.src} />}
      </div> 
      <div className={styles.meta}>
        <div className={styles.userInfo}>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.description}>{post.content}</div>
        </div>
        <div>
          <div className={styles.avatar}>{post.User.nickname[0]}</div>
          <div className={styles.nickName}>{post.User.nickname}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogCardForm;