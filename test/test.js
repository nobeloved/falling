const basic = require('../math/basic');

let nums1 = '2,2';
let nums2 = '2,-2';
let nums3 = '-1,-1';
let nums4 = '0,7';
let nums5 = '2,1,1';

test('Adding two numbers (' + nums1 + ') gives their sum.', () => {
    expect(basic.add(nums1)).toBe(4);
})

test('Subtracting two numbers (' + nums1 + ') gives their difference.', () => {
    expect(basic.subtract(nums1)).toBe(0);
})

test('Adding two numbers (' + nums2 + ') gives their sum.', () => {
    expect(basic.add(nums2)).toBe(0);
})

test('Subtracting two numbers (' + nums2 + ') gives their difference.', () => {
    expect(basic.subtract(nums2)).toBe(4);
})

test('Adding two numbers (' + nums3 + ') gives their sum.', () => {
    expect(basic.add(nums3)).toBe(-2);
})

test('Subtracting two numbers (' + nums3 + ') gives their difference.', () => {
    expect(basic.subtract(nums3)).toBe(0);
})

test('Adding two numbers (' + nums4 + ') gives their sum.', () => {
    expect(basic.add(nums4)).toBe(7);
})

test('Subtracting two numbers (' + nums4 + ') gives their difference.', () => {
    expect(basic.subtract(nums4)).toBe(-7);
})

test('Adding three numbers (' + nums5 + ') gives their sum.', () => {
    expect(basic.add(nums5)).toBe(4);
})

test('Subtracting three numbers (' + nums5 + ') gives their difference.', () => {
    expect(basic.subtract(nums5)).toBe(0);
})