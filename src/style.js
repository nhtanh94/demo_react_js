const styles = () => ({
  container: {
    backgroundColor: "red",
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 50,
    "& span": {
      color: "green",
    },
    "& .subtitle": {
      color: "blue",
    },
  },
});

export default styles;
