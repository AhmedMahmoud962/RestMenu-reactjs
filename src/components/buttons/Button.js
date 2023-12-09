import "./Button.css";
function Button({ filterbyButtons, allCatagory }) {
  // to filter by catagory
  const onfilter = (cat) => {
    filterbyButtons(cat);
  };
  return (
    <>
      <div className="button-group">
        {allCatagory.length >= 1 ? (
          allCatagory.map((btn) => {
            return <button onClick={() => onfilter(btn)}>{btn}</button>;
          })
        ) : (
          <h1>No data to display</h1>
        )}
        {/* <button onClick={() => onfilter("burger")}>Burger</button>
        <button onClick={() => onfilter("pasta")}>Pasta</button>
        <button onClick={() => onfilter("sweet")}>Sweets</button>
        <button onClick={() => onfilter("drink")}>Drinks</button>
        <button onClick={() => onfilter("all")}>All Menu</button> */}
      </div>
    </>
  );
}

export default Button;

// <div className="button-group">
//   {allCategory.length >= 1 ? (
//     allCategory.map((btn) => {
//       return (
//         <div key={btn.id}>
//           <button onClick={() => onFilter(btn)}>{btn}</button>
//         </div>
//       );
//     })
//   ) : (
//     <h2>No data to display</h2>
//   )}
//   {/* <div className="button-group">
//     <button onClick={() => onFilter("All")}>All</button>
//     <button onClick={() => onFilter("Product Men")}>Men</button>
//     <button onClick={() => onFilter("Product Woman")}>Woman</button>
//     <button onClick={() => onFilter("Product Acessories")}>Acessories</button>
//   </div> */}
// </div>
