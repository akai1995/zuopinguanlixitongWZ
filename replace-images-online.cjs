const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'mockData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const baseUrl = 'https://raw.githubusercontent.com/akai1995/zuopinguanlixitongWZ/main/public/images';

const colorMap = {
  '1': '#667eea',
  '2': '#764ba2',
  '3': '#f093fb',
  '4': '#f5576c',
  '5': '#4facfe',
  '6': '#00f2fe',
  '7': '#43e97b',
  '8': '#38f9d7',
  '9': '#fa709a',
  '10': '#fee140',
  '11': '#ff9a9e',
  '12': '#a18cd1',
  '13': '#fbc2eb',
  '14': '#84fab0',
  '15': '#8fd3f4',
  '16': '#e0c3fc',
  '17': '#8ec5fc',
  '18': '#ffecd2',
  '19': '#fcb69f',
  '20': '#a8edea',
  '21': '#667eea'
};

function createSvgUrl(width, height, color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${color}"/><text x="${width/2}" y="${height/2}" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="sans-serif" font-size="${Math.min(width, height)/6}">${width}×${height}</text></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

let workId = 1;
content = content.replace(/cover:\s*'\/images\/works\/\d+-cover\.svg'/g, () => {
  const color = colorMap[workId.toString()] || colorMap['1'];
  const url = createSvgUrl(800, 450, color);
  workId++;
  return `cover: '${url}'`;
});

workId = 1;
content = content.replace(/images:\s*\[\s*'\/images\/works\/\d+-full\.svg'\s*\]/g, () => {
  const color = colorMap[workId.toString()] || colorMap['1'];
  const url = createSvgUrl(1200, 800, color);
  workId++;
  return `images: [\n      '${url}'\n    ]`;
});

let aiId = 1;
content = content.replace(/thumbnail:\s*'\/images\/ai\/\d+-thumb\.svg'/g, () => {
  const color = colorMap[aiId.toString()] || colorMap['1'];
  const url = createSvgUrl(400, 400, color);
  aiId++;
  return `thumbnail: '${url}'`;
});

aiId = 1;
content = content.replace(/fullImage:\s*'\/images\/ai\/\d+-full\.svg'/g, () => {
  const color = colorMap[aiId.toString()] || colorMap['1'];
  const url = createSvgUrl(1200, 800, color);
  aiId++;
  return `fullImage: '${url}'`;
});

aiId = 1;
content = content.replace(/images:\s*\[\s*'\/images\/ai\/\d+-full\.svg'\s*\]/g, () => {
  const color = colorMap[aiId.toString()] || colorMap['1'];
  const url = createSvgUrl(1200, 800, color);
  aiId++;
  return `images: [\n      '${url}'\n    ]`;
});

content = content.replace(/'\/images\/1\.jpg'/g, `'${baseUrl}/1.jpg'`);
content = content.replace(/'\/images\/2\.jpg'/g, `'${baseUrl}/2.jpg'`);
content = content.replace(/'\/images\/3\.jpg'/g, `'${baseUrl}/3.jpg'`);
content = content.replace(/'\/images\/4\.jpg'/g, `'${baseUrl}/4.jpg'`);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated mockData.ts with online base64 images');
