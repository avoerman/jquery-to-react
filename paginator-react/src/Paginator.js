class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.createPageState(props);

    this.createPageState = this.createPageState.bind(this);
    this.jumpToPage = this.jumpToPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.createPageState(nextProps));
  }

  createPageState({ currentPage, totalPages }) {
    return {
      currentPage: currentPage || 1,
      totalPages: totalPages || 1
    };
  }

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

  jumpToPage(newPage) {
    const newState = this.createPageState({ currentPage: newPage });

    this.setState({ currentPage: newState.currentPage }, () => {
      this.props.onPageChange(this.state);
    });
  }
}

ReactDOM.render(
  <Paginator currentPage={2} totalPages={5} onPageChange={console.log} />,
  document.querySelector('[data-react-component="Paginator"]')
);
