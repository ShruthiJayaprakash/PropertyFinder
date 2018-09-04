import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Pagination.css';

class Pagination extends Component {
  render() {
    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }
    return (
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(1)}>First</a>
        </li>
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
        </li>
        {pager.pages.map((page, index) =>
        <li key={index}>
          <a onClick={() => this.setPage(page)} >{page}</a>
        </li>
        )}
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
        </li>
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
    );
}
constructor(props) {
  super(props);
  this.state = { pager: {} };
}

componentWillMount() {
  if (this.props.items && this.props.items.length) {
    this.setPage(this.props.initialPage);
  }
}

componentDidUpdate(prevProps, prevState) {
  if (this.props.items !== prevProps.items) {
    this.setPage(this.props.initialPage);
  }
}

setPage(page) {
  var items = this.props.items;
  var pager = this.state.pager;
  if (page < 1 || page > pager.totalPages) {
    return;
  }
  pager = this.getPager(items.length, page);
  var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
  this.setState({ pager: pager });
  this.props.onChange(pageOfItems);
}

getPager(totalItems, currentPage, pageSize) {
  currentPage = currentPage || 1;
  pageSize = pageSize || 2;
  var totalPages = Math.ceil(totalItems / pageSize);
  var startPage, endPage;
  if (totalPages <= 10) {
    startPage = 1;
    endPage = totalPages;
  } else {
        if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
            }
        }
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const range = (start, end) => (
          Array.from(Array(end - start + 1).keys()).map(i => i + start)
        )
    const pages = range(startPage, endPage)
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  initialPage: PropTypes.number
}

export default Pagination;
