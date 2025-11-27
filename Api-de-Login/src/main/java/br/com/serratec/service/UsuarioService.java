package br.com.serratec.service;

import br.com.serratec.dtos.CadastroRequest;
import br.com.serratec.dtos.LoginRequest;
import br.com.serratec.dtos.LoginResponse;
import br.com.serratec.entity.Usuario;
import br.com.serratec.repository.UsuarioRepository;
import br.com.serratec.security.JwtUtil;

import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final UsuarioRepository repo;
    private final JwtUtil jwt;

    public UsuarioService(UsuarioRepository repo, JwtUtil jwt) {
        this.repo = repo;
        this.jwt = jwt;
    }

    public void cadastrar(CadastroRequest dto) {
        Usuario u = new Usuario(dto.nome, dto.email, dto.senha);
        repo.save(u);
    }


    public LoginResponse login(LoginRequest dto) {
        Usuario usuario = repo.findByEmail(dto.email)
                .orElseThrow(() -> new RuntimeException("Usuário não existe"));

        if (!usuario.getSenha().equals(dto.senha))
            throw new RuntimeException("Senha errada");

        String token = jwt.gerarToken(usuario.getEmail());

        return new LoginResponse(token, usuario.getNome(), usuario.getId());

    }

}
