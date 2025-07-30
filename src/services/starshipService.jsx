// import React from "react";

// const starshipService = () => {
//   const [selection, setSelection] = useState("1");
//   const [post, setPost] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const url = "https://swapi.info/api/starships/";
//   const controller = new AbortController();

//   const fetchPost = async () => {
//     setIsLoading(true);
//     setError(null);
//     setPost(null);

//     try {
//       const res = await fetch(url + selection);

//       if (!res.ok) {
//         throw new Error("something went wrong");
//       }

//       const data = await res.json();

//       setPost({
//         name: data.name,
//         starship_class: data.starship_class,
//         manufacturer: data.manufacturer,
//         model: data.model,
//       });
//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   };

//   //   const handleSelectionChange = (event) => {
//   //     setSelection(event.target.value);
//   //   };

//   //   useEffect(() => {
//   //     fetchPost();
//   //   }, [selection]);

//   return <>hello</>;
// };
// export default starshipService;
