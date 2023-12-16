const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

console.log(new Date().toLocaleDateString('ja-JP', options));
