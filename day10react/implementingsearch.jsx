class Panel extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false, 
        searchFilter: '',
        activities: data,
        filtered: data,
      }
    }
  
    componentDidMount() {this.updateData();}
    componentWillReceiveProps(nextProps) {
     
      if (nextProps.requestRefresh === true) {
        this.setState({loading: true}, this.updateData);
      }
    }
  
    handleSearch = txt => {
      if (txt === '') {
        this.setState({
          filtered: this.state.activities
        })
      } else {
        const { activities } = this.state
        const filtered = activities.filter(a => a.actor && a.actor.login.match(txt))
        this.setState({
          filtered
        })
      }
    }
  
   
    updateData() {
      this.setState({
        loading: false,
        activities: data
      }, this.props.onComponentRefresh);
    }
  
    render() {
      const {loading, filtered} = this.state;
  
      return (
        <div>
          <Header
            onSubmit={this.handleSearch}
            title="Github activity" />
          <div className="content">
            <div className="line"></div>
            {/* Show loading message if loading */}
            {loading && <div>Loading</div>}
            {/* Timeline item */}
            {filtered.map((activity) => (
              <ActivityItem
                key={activity.id}
                activity={activity} />
            ))}
  
          </div>
        </div>
      )
    }
  }