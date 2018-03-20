class Paginator extends React.Component {
  state = {
    currentPage: this.props.currentPage || 1,
    totalPages: this.props.totalPages || 1
  };

  jumpToPage = newPage => {
    this.setState({ currentPage: newPage || 1 }, () => {
      this.props.onPageChange(this.state);
    });
  };

  render() {
    return (
      <div className="field is-grouped">
        <div className="control">
          <PreviousButton
            currentPage={this.state.currentPage}
            onClick={this.jumpToPage}
          />
        </div>
        <div className="control">
          <PageSelector
            selectedPage={this.state.currentPage}
            totalPages={this.state.totalPages}
            onSelect={this.jumpToPage}
          />
        </div>
        <div className="control">
          <NextButton
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
            onClick={this.jumpToPage}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Paginator currentPage={2} totalPages={5} onPageChange={console.log} />,
  document.querySelector('[data-react-component="Paginator"]')
);
