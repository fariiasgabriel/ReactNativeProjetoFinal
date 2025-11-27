package br.com.serratec.dtos;

public class LoginResponse {
    public String token;
    public String nome;
    public Long id;

    public LoginResponse(String token, String nome, Long id) {
        this.token = token;
        this.nome = nome;
        this.id = id;
    }
}
