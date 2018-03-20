class Paginator extends React.Component {
  createPageState = ({ currentPage, totalPages }) => {
    return {
      currentPage: currentPage || 1,
      totalPages: totalPages || 1
    };
  };

  state = this.createPageState(this.props);

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

  jumpToPage = newPage => {
    const newState = this.createPageState({ currentPage: newPage });

    this.setState({ currentPage: newState.currentPage }, () => {
      this.props.onPageChange(this.state);
    });
  };
}

ReactDOM.render(
  <Paginator currentPage={2} totalPages={5} onPageChange={console.log} />,
  document.querySelector('[data-react-component="Paginator"]')
);
