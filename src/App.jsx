// import { useState } from "react";
// // import CounterComponent from "./components/CounterComponent/CounterComponent";
// import post from './post.json'
// import ArticlePost from "./components/ArticlePost/ArticlePost";
// import PageCounter from "./components/CounterComponent/Counter/PageCounter";

import { useEffect, useState } from "react";

function App() {
 const [counter, setCounter] = useState(0);
 const [counter2, setCounter2] = useState(0);
 // console.log('clg')
  // console.log('without useEf counter:', counter)

  useEffect(()=>{
    console.log('current counter:', counter)
  },[counter]);

  useEffect(()=>{
    console.log('current counter2:', counter2)
  },[counter2]);

  return (<div>
    <button onClick={()=>setCounter(counter+1)}>{counter}</button>
    <button onClick={()=>setCounter2(counter2+1)}>{counter2}</button>
  </div>
)}
export default App;
///////////////////////////////////////////////////////////////////////////////
// function App() {
//   const [page, setPage] = useState(0);

//   const isLastPage = page === post.length - 1;//або через if
//   const isFirstPage = page === 0;

//   const handleChangePage = (params) => { 
//     if(params === 'prev'){
//       // if(page === 0) return
//       setPage ( page - 1);
//     } else {
//       // if(page === post.length) return
//       setPage ( page + 1)
//     }
//   }
//   const currentPost = post[page]
//   return (
//     <div>
//       <button disabled={isFirstPage} onClick={()=>handleChangePage('prev')}>prev</button>
//       <button disabled={isLastPage} onClick={()=>handleChangePage('next')}>next</button>
//      <PageCounter page={page+1} total={post.length}/>
//      <ArticlePost title={currentPost.title} body={currentPost.body}/>
//     </div>
//   );
// }
// export default App;


  // const handleClick = (id) => {
  //   console.log("id:", id);
  // };
  // return (
  //   <div>
  //     <button onClick={handleClick}>qwerty</button>
  //     <button onClick={() => {handleClick(10)}}>qwerty</button>
  //   </div>
  // );

// const CounterComponentWithState = () => {
//   const [counter, setCounter] = useState(0);

//   const handleIncrement = () => {
//     setCounter(counter + 1)
//     console.log("counter +", counter);
//   };
//   return <>
//       <button onClick={handleIncrement}>Increment</button>
//       <p>{counter}</p>
//   </>
// }



/////////////////////////////////////////////////////




