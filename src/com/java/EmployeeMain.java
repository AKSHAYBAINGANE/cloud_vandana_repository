package com.java;

import java.util.List;

public class EmployeeMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Employee employee1 = new Employee(1,"Akshay", 20000);
		Employee employee2 = new Employee(2,"Swati", 55000);
		Employee employee3 = new Employee(3,"Ayush", 35000);
		Employee employee4 = new Employee(4,"Heena", 45000);
		

		List<Employee> employees = new java.util.ArrayList<>();
        employees.add(employee1);
        employees.add(employee2);
        employees.add(employee3);
        employees.add(employee4);
        for (Employee emp : employees) {
            emp.displayDetails();
            System.out.println("___________________________________");
        }
	}

}
