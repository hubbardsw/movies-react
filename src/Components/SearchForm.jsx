import React from 'react'
import './searchForm.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

const SearchForm = (props) => {
  return(
    <div className = "container">
    <div style = {{marginTop:20}}className ="row">
      <div className = "col-md-11">
        <form onSubmit={props.getSearchTerms}>
      <input className="form-control" type="text" name="searchTerms" value={props.searchTerms} onChange={props.onChangeValue}/>
    </form>
    </div>
    <button onClick = {props.getSearchTerms} style = {{marginTop:10}}className="btn btn-default btn-circle float-right "><FontAwesomeIcon icon="search"/></button>
    </div>
    </div>
  )
}

export default SearchForm