// element property
console.dir(p);

console.table(p);
console.log('%c I am text', 'font-size: 50px; background: red;')
console.warn('OH NOO')
console.error('Shit!')

console.assert( 1 === 2, 'It is wrong')
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'It is wrong')

console.clear()

console.group(`${name}`);
console.groupCollapsed(`${name}`);
console.groupEnd(`${name}`);
