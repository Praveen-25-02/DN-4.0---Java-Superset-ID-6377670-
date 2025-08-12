import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [view, setView] = useState('book');

  // 1. Element Variables
  let component;
  if (view === 'book') component = <BookDetails />;
  else if (view === 'blog') component = <BlogDetails />;
  else component = <CourseDetails />;

  return (
    <div>
      <h1>Welcome to Blogger App</h1>
      <button onClick={() => setView('book')}>Book</button>
      <button onClick={() => setView('blog')}>Blog</button>
      <button onClick={() => setView('course')}>Course</button>

      <hr />

      {/* 2. Using Element Variable */}
      <h2>Using Element Variable:</h2>
      {component}

      {/* 3. Using Ternary Operator */}
      <h2>Using Ternary:</h2>
      {view === 'book' ? <BookDetails /> : view === 'blog' ? <BlogDetails /> : <CourseDetails />}

      {/* 4. Using && (Short Circuit) */}
      <h2>Using && operator:</h2>
      {view === 'book' && <BookDetails />}
      {view === 'blog' && <BlogDetails />}
      {view === 'course' && <CourseDetails />}

      {/* 5. IIFE for inline logic */}
      <h2>Using IIFE:</h2>
      {
        (() => {
          switch (view) {
            case 'book': return <BookDetails />;
            case 'blog': return <BlogDetails />;
            case 'course': return <CourseDetails />;
            default: return null;
          }
        })()
      }
    </div>
  );
}

export default App;
