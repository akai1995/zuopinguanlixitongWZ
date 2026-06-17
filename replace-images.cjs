const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'mockData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const works = [
  { id: '1', cover: '/images/works/1-cover.svg', images: ['/images/works/1-full.svg'] },
  { id: '2', cover: '/images/works/2-cover.svg', images: ['/images/works/2-full.svg'] },
  { id: '3', cover: '/images/works/3-cover.svg', images: ['/images/works/3-full.svg'] },
  { id: '4', cover: '/images/works/4-cover.svg', images: ['/images/works/4-full.svg'] },
  { id: '5', cover: '/images/works/5-cover.svg', images: ['/images/works/5-full.svg'] },
  { id: '6', cover: '/images/works/6-cover.svg', images: ['/images/works/6-full.svg'] },
  { id: '7', cover: '/images/works/7-cover.svg', images: ['/images/works/7-full.svg'] },
  { id: '8', cover: '/images/works/8-cover.svg', images: ['/images/works/8-full.svg'] },
  { id: '9', cover: '/images/works/9-cover.svg', images: ['/images/works/9-full.svg'] },
  { id: '10', cover: '/images/works/10-cover.svg', images: ['/images/works/10-full.svg'] },
  { id: '11', cover: '/images/works/11-cover.svg', images: ['/images/works/11-full.svg'] },
  { id: '12', cover: '/images/works/12-cover.svg', images: ['/images/works/12-full.svg'] },
  { id: '13', cover: '/images/works/13-cover.svg', images: ['/images/works/13-full.svg'] },
  { id: '14', cover: '/images/1.jpg', images: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg'] }
];

content = content.replace(/cover:\s*'https:\/\/images\.unsplash\.com\/[^']+'/g, (match, offset) => {
  const before = content.substring(0, offset);
  const idMatch = before.match(/id:\s*'(\d+)'/);
  if (idMatch) {
    const id = idMatch[1];
    const work = works.find(w => w.id === id);
    if (work) return `cover: '${work.cover}'`;
  }
  return match;
});

content = content.replace(/images:\s*\[\s*'https:\/\/images\.unsplash\.com\/[^']+'(?:\s*,\s*'https:\/\/images\.unsplash\.com\/[^']+')*\s*\]/g, (match, offset) => {
  const before = content.substring(0, offset);
  const idMatch = before.match(/id:\s*'(\d+)'/);
  if (idMatch) {
    const id = idMatch[1];
    const work = works.find(w => w.id === id);
    if (work && work.images) {
      return `images: [\n      '${work.images.join("',\n      '")}'\n    ]`;
    }
  }
  return match;
});

const aiImages = [];
for (let i = 1; i <= 21; i++) {
  aiImages.push({
    id: String(i),
    thumbnail: `/images/ai/${i}-thumb.svg`,
    fullImage: `/images/ai/${i}-full.svg`,
    images: [`/images/ai/${i}-full.svg`]
  });
}

content = content.replace(/thumbnail:\s*'https:\/\/images\.unsplash\.com\/[^']+'/g, (match, offset) => {
  const before = content.substring(0, offset);
  const idMatch = before.match(/id:\s*'(\d+)'/);
  if (idMatch) {
    const id = idMatch[1];
    const ai = aiImages.find(a => a.id === id);
    if (ai) return `thumbnail: '${ai.thumbnail}'`;
  }
  return match;
});

content = content.replace(/fullImage:\s*'https:\/\/images\.unsplash\.com\/[^']+'/g, (match, offset) => {
  const before = content.substring(0, offset);
  const idMatch = before.match(/id:\s*'(\d+)'/);
  if (idMatch) {
    const id = idMatch[1];
    const ai = aiImages.find(a => a.id === id);
    if (ai) return `fullImage: '${ai.fullImage}'`;
  }
  return match;
});

content = content.replace(/images:\s*\[\s*'https:\/\/images\.unsplash\.com\/[^']+'(?:\s*,\s*'https:\/\/images\.unsplash\.com\/[^']+')*\s*\]/g, (match, offset) => {
  const before = content.substring(0, offset);
  const aiStart = before.lastIndexOf('export const aiImages');
  const workStart = before.lastIndexOf('export const works');
  if (aiStart > workStart) {
    const idMatch = before.match(/id:\s*'(\d+)'/);
    if (idMatch) {
      const id = idMatch[1];
      const ai = aiImages.find(a => a.id === id);
      if (ai && ai.images) {
        return `images: [\n      '${ai.images.join("',\n      '")}'\n    ]`;
      }
    }
  }
  return match;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated mockData.ts with local images');
