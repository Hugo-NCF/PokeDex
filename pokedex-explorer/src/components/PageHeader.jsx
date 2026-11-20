// page header file for pokedex 
function PageHeader(props) {
    // Get the title from props.
   const title = props.title;

    // Get the description from props.
    const description = props.description;
  
    return (
      <header>
        {/* Display the title inside an h1. */}
        <h1>{title}</h1>
  
        {/* Display the description inside a paragraph. */}
        <p>{description}</p>
      </header>
    );
  }
  
  export default PageHeader;
  