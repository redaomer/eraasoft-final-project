const fs = require('fs');
const path = require('path');
const SRC = path.resolve(__dirname, '..', 'src');

function walk(dir){
  const res = [];
  for(const name of fs.readdirSync(dir)){
    const fp = path.join(dir,name);
    const st = fs.statSync(fp);
    if(st.isDirectory()) res.push(...walk(fp));
    else if(/\.(js|jsx|ts|tsx)$/.test(name)) res.push(fp);
  }
  return res;
}

const files = walk(SRC);
const re = /from\s+['\"]([^'\"]*services\/strapi[^'\"]*)['\"]/g;
let found = false;
for(const f of files){
  const src = fs.readFileSync(f,'utf8');
  let m;
  while((m = re.exec(src)) !== null){
    const imp = m[1];
    const matched = m[0];
    const resolved = path.resolve(path.dirname(f), imp);
    const inside = resolved.startsWith(SRC + path.sep);
    console.log(`${f} -> matched: ${matched} -> import '${imp}' -> resolved: ${resolved} -> insideSrc: ${inside}`);
    found = true;
  }
}
if(!found) console.log('No imports matching services/strapi found.');
