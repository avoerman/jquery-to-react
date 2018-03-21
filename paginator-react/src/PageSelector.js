class PageSelector extends React.Component {
  handleSelect = event => {
    event.preventDefault();

    const selectedPage = Number(event.target.value);
    this.props.onSelect(selectedPage);
  };

  render() {
    const { totalPages, selectedPage } = this.props;

    return (
      <span className="select is-info is-rounded">
        <select onChange={this.handleSelect} value={selectedPage}>
          {rangeOfNums(1, totalPages).map(pageNum => (
            <option key={pageNum} value={pageNum}>
              {pageNum}
            </option>
          ))}
        </select>
      </span>
    );
  }
}

// Eg: (1, 5) => [ 1, 2, 3, 4, 5 ]
// Eg: (-3, 2) => [ -3, -2, -1, 0, 1, 2 ]
function rangeOfNums(start, end) {
  const rangeSize = Math.abs(end - start) + 1;
  return [...Array(rangeSize)].map((_, idx) => start + idx);
}
