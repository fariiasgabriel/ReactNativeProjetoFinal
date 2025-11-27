package br.com.serratec.controller;


import br.com.serratec.dtos.CadastroRequest;
import br.com.serratec.dtos.LoginRequest;
import br.com.serratec.dtos.LoginResponse;
import br.com.serratec.service.UsuarioService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @PostMapping("/cadastro")
    public void cadastro(@RequestBody CadastroRequest dto) {
        service.cadastrar(dto);
    }


    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest dto) {
        return service.login(dto);
    }
}