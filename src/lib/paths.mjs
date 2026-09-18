export function withBase(path = '/', base = '/') {
  const prefix = '/' + base.split('/').filter(Boolean).join('/');
  const suffix = path.replace(/^\/+/, '');
  return (prefix === '/' ? '/' : prefix + '/') + suffix;
}

export function workDestination(work, base = '/') {
  return work.type === 'external' ? work.url : withBase('demos/' + work.slug + '/index.html', base);
}
