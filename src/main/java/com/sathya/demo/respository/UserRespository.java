
package com.sathya.demo.respository; // Make sure this package is correct

import com.sathya.demo.model.User; // Your User entity class
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository  // This annotation tells Spring to create a bean for the repository
public interface UserRespository extends JpaRepository<User, Long> {
    // You can define custom queries here if needed
}
