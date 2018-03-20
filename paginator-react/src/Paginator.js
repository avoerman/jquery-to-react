class Paginator extends React.Component {
  state = { currentPage: 1, totalPages: 0 };

  render() {
    return (
      <div className="field is-grouped">
        {this.currentPage <= 1 ? null : (
          <div className="control">
            <a className="button is-info">Prev.</a>
          </div>
        )}
        <div className="control">
          <PageSelector totalPages={1} currentPage={1} />
        </div>
        <div className="control">
          <a className="button is-info">Next</a>
        </div>
      </div>
    );
  }
}

function PageSelector() {
  return (
    <div className="select is-info">
      <select name="text" value="2" readOnly>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}

ReactDOM.render(
  <Paginator totalItems={12} pageSize={3} />,
  document.querySelector('[data-react-component="Paginator"]')
);
