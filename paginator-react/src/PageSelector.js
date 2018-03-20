class PageSelector extends React.Component {
  handleSelect = event => {
    event.preventDefault();

    const selectedPage = Number(event.target.value);
    this.props.onSelect(selectedPage);
  };

  render() {
    return (
      <span className="select is-info is-rounded">
        <select onChange={this.handleSelect} value={this.props.selectedPage}>
          {this.options(this.props.totalPages, this.props.selectedPage)}
        </select>
      </span>
    );
  }

  options = (totalPages, selectedPage) => {
    return sequence(totalPages).map(pageNum => (
      <option key={pageNum} value={pageNum}>
        {pageNum}
      </option>
    ));
  };
}

function sequence(num) {
  return Array.from(Array(num), (_, idx) => idx + 1);
}
