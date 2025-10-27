package utez.edu.mx.sgu_server.modules.users;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.sgu_server.utils.ApiResponse;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping("/")
    public ResponseEntity<ApiResponse> save(@RequestBody UserBean user) {
        return service.save(user);
    }

    @PutMapping("/")
    public ResponseEntity<ApiResponse> update(@RequestBody UserBean user) {
        return service.update(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
