package utez.edu.mx.sgu_server.modules.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserBean, Long> {
    Optional<UserBean> findByEmail(String email);
    Optional<UserBean> findByPhone(String phone);
    boolean existsByEmail(String email);
}
