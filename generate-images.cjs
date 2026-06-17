const fs = require('fs');
const path = require('path');

const colors = [
  '#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', 
  '#00f2fe', '#43e97b', '#38f9d7', '#fa709a', '#fee140',
  '#ff9a9e', '#a18cd1', '#fbc2eb', '#84fab0', '#8fd3f4',
  '#e0c3fc', '#8ec5fc', '#ffecd2', '#fcb69f', '#a8edea'
];

const worksDir = path.join(__dirname, 'public', 'images', 'works');
const aiDir = path.join(__dirname, 'public', 'images', 'ai');

if (!fs.existsSync(worksDir)) fs.mkdirSync(worksDir, { recursive: true });
if (!fs.existsSync(aiDir)) fs.mkdirSync(aiDir, { recursive: true });

function createImage(width, height, color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="${color}"/>
    <text x="${width/2}" y="${height/2}" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="sans-serif" font-size="${Math.min(width, height)/6}">${width}×${height}</text>
  </svg>`;
  return svg;
}

for (let i = 1; i <= 14; i++) {
  const color = colors[(i - 1) % colors.length];
  fs.writeFileSync(path.join(worksDir, `${i}-cover.svg`), createImage(800, 450, color));
  fs.writeFileSync(path.join(worksDir, `${i}-full.svg`), createImage(1200, 800, color));
}

for (let i = 1; i <= 21; i++) {
  const color = colors[(i - 1) % colors.length];
  fs.writeFileSync(path.join(aiDir, `${i}-thumb.svg`), createImage(400, 400, color));
  fs.writeFileSync(path.join(aiDir, `${i}-full.svg`), createImage(1200, 800, color));
}

console.log('Generated placeholder images');
