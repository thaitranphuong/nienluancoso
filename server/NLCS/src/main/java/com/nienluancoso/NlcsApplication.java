package com.nienluancoso;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.client.RestTemplate;

import com.nienluancoso.entity.RoleEntity;
import com.nienluancoso.repository.RoleRepository;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@SpringBootApplication
public class NlcsApplication implements ApplicationRunner {
    @Autowired
    RoleRepository roleRepo;

    public static void main(String[] args) {
        SpringApplication.run(NlcsApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
    	createRole();
    }

    public void createRole() {
		RoleEntity teacherRole = new RoleEntity();
		RoleEntity studentRole = new RoleEntity();
		teacherRole.setId(1L);
		teacherRole.setName("teacher");
		studentRole.setId(2L);
		studentRole.setName("student");
		roleRepo.save(teacherRole);
		roleRepo.save(studentRole);
	}

}
