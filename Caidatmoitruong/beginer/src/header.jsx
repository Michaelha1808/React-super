const lastName = 'Chi'

const sum = (a, b) => a + b

const elemnt = (
  <h1>
    Hello, world!. I am {lastName}. I am {sum(10, 11)}
  </h1>
)
// Tên thuộc tính chuyển thành camelCase
const elemnt2 = (
  <a href='google.com' tabIndex='11' className='123' id='the-a'>
    Google
  </a>
)

const elemnt3 = <h3 />

const elemnt4 = <img src='' />

const elemnt5 = <input type='text' />

const comment = `<script>console.log('send token')</script>`

// const elemnt6 = <h1 className='greeting'>Hello, world</h1>

// // Babel bien dich
// const elemnt6 = React.createElement('h1', { className: 'greeting' }, 'Hello, world')

// const elemnt = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// }
