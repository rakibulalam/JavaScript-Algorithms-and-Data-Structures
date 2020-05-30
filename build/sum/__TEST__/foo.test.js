import sum from '../foo';
// eslint-disable-next-line no-undef
test('basic', async () => {
    // eslint-disable-next-line no-undef
    expect(sum()).toBe(0);
});
// eslint-disable-next-line no-undef
test('basic again', async () => {
    // eslint-disable-next-line no-undef
    expect(sum(1, 2)).toBe(3);
}, 1000 /* optional timeout */);
