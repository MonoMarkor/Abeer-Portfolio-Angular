const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogsDir = path.join(__dirname, '../public/blogs');

function generateIndex() {
  // Ensure the directory exists to avoid crashes
  if (!fs.existsSync(blogsDir)) {
    console.warn(`Warning: Directory not found at ${blogsDir}. Creating directory...`);
    fs.mkdirSync(blogsDir, { recursive: true });
    fs.writeFileSync(path.join(blogsDir, 'index.json'), JSON.stringify([], null, 2));
    return;
  }

  // Native fs.readdirSync guarantees an Array of filenames
  const files = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'));

  const posts = files.map(file => {
    const raw = fs.readFileSync(path.join(blogsDir, file), 'utf-8');
    const { data } = matter(raw);
    const slug = file.replace(/\.md$/, '');

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || ''
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(
    path.join(blogsDir, 'index.json'),
    JSON.stringify(posts, null, 2)
  );

  console.log(`Generated index.json with ${posts.length} posts`);
}

generateIndex();
