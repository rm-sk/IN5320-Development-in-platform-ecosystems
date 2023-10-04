function Pagination(props) {
    const returnStatement = [];

    if (props.pageNumber > 1){
        console.log(props.pageNumber);
        returnStatement.push(<button onClick={props.prev}>Previous page</button>);
    }

    if (props.pageNumber == 1 || props.pageNumber < props.apiData.pager.pageCount){
        returnStatement.push(<button onClick={props.next}>Next page</button>);
    }

    return returnStatement;
}
  
export default Pagination;
  