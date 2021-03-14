import React from "react";

class Search extends React.Component{


 render(){
        return (
            <input type="text" 
                   className="form-control search-input"
                   placeholder="Search notes"
               

                onChange={this.props.onUpdateSearch}

            />
        )
    }
}
export default Search
