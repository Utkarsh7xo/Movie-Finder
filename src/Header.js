const Header = (props) => {
  return (
    <header style={styles.headerStyle}>
      <h1 style={styles.titleStyle}>Movie Finder</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          value={props.value}
          onChange={props.onChange} 
          style={styles.searchBarStyle}
        />
      </div>
    </header>
  );
};

const styles = {
  headerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: '#7798ff'
  },
  titleStyle: {
    margin: 0,
    color: '#222222',
  },
  searchContainer: {
    marginTop: '20px', 
  },
  searchBarStyle: {
    padding: '8px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '10px'
  }
};

export default Header;
