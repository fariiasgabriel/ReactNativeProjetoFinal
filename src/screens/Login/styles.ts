import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // ou a cor de fundo que preferir
  },
  logo: {
    marginBottom: 20,
    width: 100, // Ajuste o tamanho conforme sua imagem
    height: 100,
  },
  areaInput: {
    width: "90%",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  submitButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#00b9fb", // Cor do botão
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;