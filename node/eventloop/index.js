const bar = () => console.log('bar');

const baz = ()=> console.log('baz');

const foo = ()=>{
    console.log('foo')
    bar()
    baz()
    console.log('foo2')
}


foo();