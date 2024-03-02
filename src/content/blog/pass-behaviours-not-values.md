---
title: Pass Behaviours Not Values
description: a flexible approach ro embracing change in software
keywords: somtodev, blog, software, behaviour farameterization
date: 02 March 2024
---

In the software world, the demands of a customer is ever-changing. As a software developer, it's of importance to develop alongside the idea of having change as an inevitable companion.

A way to make your software flexible like play dough is to:

> **Pass Behaviours Not Values**

Passing behaviours simply implies the ability to pass methods as arguments to other methods. Doing this, somewhat kills the dread of change to your software whilst making it flexible.

Instead of creating multiple functions with different parameters for filtering students based on various conditions, we can pass behaviours as arguments. Which makes our software flexible and adaptable to changing requirements.

Let's dive into a practical example:

### Case Study

We have a list of students in a school; Each student have a first name, last name, age and department;

In typescript, we could represent each student with a type;

```
type Student = {
  firstname: string;
  lastname: string;
  age: number;
  department: Department;
};

type Department = "STEM" | "OTHERS";
```

For simplicity sake, we have just two departments;
As a developer, you have being required to write a function to filter each student by department. Easy right, you could simply just have to function to do that. Something like this;

```
function filterStudentByDepartment(
	dataset: Array<Student>,
	department: Department): Array<Student>
{
  return dataset.filter(student => student.department === department)
}
```

Yum, we didn't break a sweat right to get that done. Now you've been required to filter the students who are over the age of 17 and also by department. "Um, sure no problem we could just add another parameter, _age_". And we would have another function that looks thus;

```
function filterStudentByDepartmentAndAge(
	dataset: Array<Student>,
	department: Department,
	age: number
): Array<Student>
{
  return dataset.filter(student => student.department === department && student.age > 17)
}
```

That solution is great, but not the best and also not flexible; What if we were required to filter students by their first name initials, department and age. We could simply add another function with the provided initial letter to filter by. But this solution would break the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and also wouldn't be flexible for further changes as the number of parameters would have a tendency of increasing.

Here is where passing behaviours come to save the day; We could simply have a function that filters the list of student based on a provided condition(_this time a method_).

Our filterStudents method declaration;

```
function filterStudents(
  dataset: Array<Student>,
  condition: StudentPredicate, // Here StudentPredicate reps a method signature
): Array<Student> {
  return dataset.filter((student) => condition(student));
}
```

I hope I haven't lost you with that code snippet up there.
Now, instead of creating specific filtering functions for each scenario, we define reusable conditions using the StudentPredicate type:

```
type StudentPredicate = (student: Student) => boolean;
```

Our Student Predicate is a method signature for our filter condition. It takes in a student as an argument and returns a boolean based on custom implementation.

Previously we had to use parameters(values) to solve these given tasks;

- [**Task A**](#) -> filter students by department
- [**Task B**]() -> filter students by department and age

Now let's creating those behaviours to solve those tasks:

```
// # TASK A
const filterStemStudents: StudentPredicate = (student) => {
  return student.department == "STEM";
};

// # TASK B
const filterEighteenPlusStemStudent: StudentPredicate = (student) => {
  return student.department == "STEM" && student.age > 18;
};
```

Let's apply these behaviours:

```
// Filtering students in the STEM department
const stemDepartmentStudents = filterStudents(students, filterStemStudents);

// Filtering students aged 18 and above in the STEM department
const eighteenPlusStemStudents = filterStudents(students, filterEighteenPlusStemStudents);
```

### Conclusion

In the ever-evolving landscape of software development, where the demands of customers are prone to change, adaptability becomes a cornerstone of success. As developers, embracing change is not just a mindset but a skill that can be ingrained into the our code.

The principle of **Pass Behaviours Not Values** provides a powerful tool to navigate the challenges of evolving requirements. By allowing methods to be passed as arguments, we create software that is not only flexible but also resilient to the inevitability of change.

In our case study, we explored a scenario where filtering students based on different criteria seemed straightforward initially. However, as requirements expanded, the traditional approach of adding parameters led to inflexible and cumbersome solutions.

The introduction of the **StudentPredicate** type and the concept of passing behaviours came to the rescue. Instead of crafting multiple functions for each specific filtering task, we created reusable conditions that could be dynamically applied. This not only adheres to the DRY (Don't Repeat Yourself) principle but also sets the stage for a codebase that can gracefully accommodate future modifications.

As we've seen, passing behaviors fosters modularity and adaptability. It allows us to create dynamic, reusable functions that can stand the test of evolving requirements without succumbing to parameter bloat.

So, the next time you find yourself faced with the challenge of accommodating changes in your software, consider passing behaviors. Embrace the flexibility it brings, and let it be your ally in the ever-changing landscape of software development. Happy coding and Thanks For Reading.

##### References

[Java 8 In Action](https://www.oreilly.com/library/view/java-8-in/9781617291999/): Behaviour Parameterization
