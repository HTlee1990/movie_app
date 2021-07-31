import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import './Home.css';
import Api from "../API/Api";

function Home () {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    Api()
    .then(movie => console.log(movie))
  }, [])


  return (
    <section className="container">
      
        {isLoading
          ? <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          : <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
            }
      
    </section>
  );
}


// //React component에서 특성들을 다 들고 오는것
// class Home extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };

//   //axios와 같이 데이터를 받아오는 것에는 시간이 걸리기 때문에 비동기 함수라고 선언을 해주고,
//   //그럼 무엇을 기다리느냐?? 기다릴 대상인 axios앞에 await적어주기.
//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(
//       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      
//     );
//     //this.setState({movies: movies}) 라고 할려고 했지만, 아래처럼 하면 바로 해결이 된다...
//     this.setState({ movies, isLoading: false });
//   };

//   async componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
        
//           {isLoading
//             ? <div className="loader">
//                 <span className="loader__text">Loading...</span>
//               </div>
//             : <div className="movies">
//               {movies.map((movie) => (
//                 <Movie
//                   key={movie.id}
//                   id={movie.id}
//                   year={movie.year}
//                   title={movie.title}
//                   summary={movie.summary}
//                   poster={movie.medium_cover_image}
//                   genres={movie.genres}
//                   rating={movie.rating}
//                 />
//               ))}
//             </div>
//               }
        
//       </section>
//     );
//   }
// }

export default Home;
//   constructor(props){
//     super(props);
//     console.log("constructor")
//   }

//   state = {
//     count: 0
//   }
//   add = (num) => {
//     //this.setState({count: this.state.count-1})이라고 한다면, state에 의존하기 때문에
//     //아래와 같이 current를 사용하는것이 best practice
//     this.setState(cur => ({count: cur.count+1}))
//   }

//   minus = (num) => {
//     this.setState(cur => ({count: cur.count-1}))
//   }

//   componentDidMount(){
//     console.log("component didMount")
//   }

//   componentDidUpdate(){
//     console.log("I updated")
//   }
//   //React의 class컴포넌트는 automatically render method를 자동적으로 실행한다!!
//   render(){
//     console.log("render")
//     return (
//       <div>
//         <h1>The Number is {this.state.count}</h1>
//         <button onClick={() => this.add()}>click to Plus</button>
//         <button onClick={() => this.minus()}>click to Minus</button>
//       </div>
//     )}
// }

// export default App;
