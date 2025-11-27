import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  cidade: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  temperatura: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#0077B6",
    marginVertical: 10,
  },
  condicao: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: "#0077B6",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
});

export default styles;
