/* Bank Account Management System
Encapsulate the bank account details (balance, account number) and allow operations like deposit, withdraw, and check balance.*/

function bankAccount() {
    let balance = 0;
    const accountNumber = '1234567890';
    
    function deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited ${amount}. Current balance: ${balance}`;
      }
      return 'Invalid deposit amount.';
    }
    
    function withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew ${amount}. Current balance: ${balance}`;
      }
      return 'Insufficient funds or invalid amount.';
    }
    
    function checkBalance() {
      return `Account Balance: ${balance}`;
    }
    
    return {
      deposit,
      withdraw,
      checkBalance,
    };
  }
  
  const myAccount = bankAccount();
  console.log(myAccount.deposit(100)); // Deposited 100. Current balance: 100
  console.log(myAccount.withdraw(50)); // Withdrew 50. Current balance: 50
  console.log(myAccount.checkBalance()); // Account Balance: 50
  

/* Library Book Management
Create a library management system where you can add, remove, and view books in the library*/

function library() {
    const books = [];
    
    function addBook(book) {
      books.push(book);
      return `${book.title} added to the library.`;
    }
    
    function removeBook(title) {
      const index = books.findIndex(book => book.title === title);
      if (index !== -1) {
        const removedBook = books.splice(index, 1)[0];
        return `${removedBook.title} removed from the library.`;
      }
      return `Book ${title} not found.`;
    }
    
    function viewBooks() {
      return books.length ? books.map(book => book.title).join(', ') : 'No books available.';
    }
    
    return {
      addBook,
      removeBook,
      viewBooks,
    };
  }
  
  const myLibrary = library();
  console.log(myLibrary.addBook({ title: 'JavaScript Basics' })); // JavaScript Basics added to the library.
  console.log(myLibrary.addBook({ title: 'Python Advanced' })); // Python Advanced added to the library.
  console.log(myLibrary.removeBook('Python Advanced')); // Python Advanced removed from the library.
  console.log(myLibrary.viewBooks()); // JavaScript Basics

  
/* Student Grade System
Create a student grade system to add grades, remove grades, and calculate the average grade */

function gradeSystem() {
    const grades = [];
    
    function addGrade(grade) {
      grades.push(grade);
      return `Grade ${grade} added.`;
    }
    
    function removeGrade(grade) {
      const index = grades.indexOf(grade);
      if (index !== -1) {
        grades.splice(index, 1);
        return `Grade ${grade} removed.`;
      }
      return `Grade ${grade} not found.`;
    }
    
    function calculateAverage() {
      const total = grades.reduce((acc, grade) => acc + grade, 0);
      return grades.length ? `Average grade: ${total / grades.length}` : 'No grades available.';
    }
    
    return {
      addGrade,
      removeGrade,
      calculateAverage,
    };
  }
  
  const studentGrades = gradeSystem();
  console.log(studentGrades.addGrade(85)); // Grade 85 added.
  console.log(studentGrades.addGrade(90)); // Grade 90 added.
  console.log(studentGrades.removeGrade(85)); // Grade 85 removed.
  console.log(studentGrades.calculateAverage()); // Average grade: 90
  

  /*
  Movie Collection Manager
Encapsulate a movie collection with methods to add movies, remove movies, and list all movies. */

function movieCollection() {
    const movies = [];
    
    function addMovie(movie) {
      movies.push(movie);
      return `${movie.title} added to the collection.`;
    }
    
    function removeMovie(title) {
      const index = movies.findIndex(movie => movie.title === title);
      if (index !== -1) {
        const removedMovie = movies.splice(index, 1)[0];
        return `${removedMovie.title} removed from the collection.`;
      }
      return `Movie ${title} not found.`;
    }
    
    function listMovies() {
      return movies.length ? movies.map(movie => movie.title).join(', ') : 'No movies available.';
    }
    
    return {
      addMovie,
      removeMovie,
      listMovies,
    };
  }
  
  const myMovies = movieCollection();
  console.log(myMovies.addMovie({ title: 'Inception' })); // Inception added to the collection.
  console.log(myMovies.addMovie({ title: 'Interstellar' })); // Interstellar added to the collection.
  console.log(myMovies.removeMovie('Inception')); // Inception removed from the collection.
  console.log(myMovies.listMovies()); // Interstellar
  

/* Task Manager
Create a task manager that allows you to add tasks, complete tasks, and list all tasks */

function taskManager() {
    const tasks = [];
    
    function addTask(task) {
      tasks.push({ task, completed: false });
      return `Task "${task}" added.`;
    }
    
    function completeTask(taskName) {
      const task = tasks.find(t => t.task === taskName);
      if (task) {
        task.completed = true;
        return `Task "${taskName}" marked as completed.`;
      }
      return `Task "${taskName}" not found.`;
    }
    
    function listTasks() {
      return tasks.map(t => `${t.task} - ${t.completed ? 'Completed' : 'Pending'}`).join('<br>');
    }
    
    return {
      addTask,
      completeTask,
      listTasks,
    };
  }
  
  const myTasks = taskManager();
  console.log(myTasks.addTask('Complete project')); // Task "Complete project" added.
  console.log(myTasks.addTask('Review code')); // Task "Review code" added.
  console.log(myTasks.completeTask('Complete project')); // Task "Complete project" marked as completed.
  console.log(myTasks.listTasks()); // List of tasks with status
  