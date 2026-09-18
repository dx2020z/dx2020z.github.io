import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

const schemaURL = new URL('../src/lib/model.mjs', import.meta.url);
const pathsURL = new URL('../src/lib/paths.mjs', import.meta.url);
test('content and path contracts are implemented', () => {
  assert.ok(existsSync(schemaURL), 'Work schema must exist before content can be published');
  assert.ok(existsSync(pathsURL), 'Base-aware URL helper must exist');
});
if (existsSync(schemaURL) && existsSync(pathsURL)) {
  const { workSchema } = await import(schemaURL);
  const { withBase, workDestination } = await import(pathsURL);
  const valid = { title: '测试作品', slug: 'test-work', type: 'local', kind: 'tool', status: '完成', desc: '一份实际作品' };
  test('local cards need six fields; optional presentation fields have defaults', () => {
    const card = workSchema.parse(valid);
    assert.deepEqual(card.tags, []);
    assert.equal(card.featured, 0);
    assert.equal(card.year, undefined);
  });
  test('external cards reject missing URL, javascript and credential-bearing URLs', () => {
    for (const url of [undefined, 'javascript:alert(1)', 'file:///secret', 'https://user:password@example.com/']) {
      assert.equal(workSchema.safeParse({ ...valid, type: 'external', url }).success, false);
    }
    assert.equal(workSchema.safeParse({ ...valid, type: 'external', url: 'https://example.com/' }).success, true);
  });
  test('slugs cannot escape the public demos directory or contain separators', () => {
    for (const slug of ['../private', 'a/b', 'a?x', '', 'UPPER']) {
      assert.equal(workSchema.safeParse({ ...valid, slug }).success, false);
    }
  });
  test('both root and GitHub repository URLs address details and demos separately', () => {
    assert.equal(withBase('/works/test-work/', '/'), '/works/test-work/');
    assert.equal(withBase('/works/test-work/', '/portfolio/'), '/portfolio/works/test-work/');
    assert.equal(withBase('/', '/portfolio/'), '/portfolio/');
    assert.equal(workDestination(valid, '/portfolio/'), '/portfolio/demos/test-work/index.html');
    assert.equal(workDestination({ ...valid, type: 'external', url: 'https://example.com/a' }, '/portfolio/'), 'https://example.com/a');
  });
}
