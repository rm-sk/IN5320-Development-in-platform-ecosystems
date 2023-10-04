function PageSize(props) {
    return <div>
        <select name="pageSize_sel" placeholder={props.value} onChange={props.set_page_size}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
        <span> items per page</span>
        </div>;
}
  
export default PageSize;
  