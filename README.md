# Kottans-backend courses

## Git
It was simple enough, it would be cool to add a test to see if a student knows the team to be shown in the course, and to give them the opportunity to skip if the answers to the tests are correct.

![img1](https://github.com/Synkevych/kottans-backend/blob/master/task_git/img1.png)
![img2](https://github.com/Synkevych/kottans-backend/blob/master/task_git/img4.png)

## Unix Shell
It was a very useful lesson! Special symbol to match characters and path to the home directory.

![img3](https://github.com/Synkevych/kottans-backend/blob/master/task_unix_shell/img_linux_1.png)

## GitHub & Collaboration
So far so good. Pull request is a very useful command, here I trained to put it into practice, also learned how to give branch prefix, like "bugfix-login-form". 

![img4](https://github.com/Synkevych/kottans-backend/blob/master/task_git-collaboration/img_git_collaboration_1.png)

![img5](https://github.com/Synkevych/kottans-backend/blob/master/task_git-collaboration/img_git_collaboration_2.png)  

## NodeJS Basics 1
### learnyounode
![img6](https://github.com/Synkevych/kottans-backend/blob/master/node_basic_1/learnyounode/node_basic_1.png)   
Node.js is a very powerful tool right out of the box.
Completed tasks were very important because they were previously asked at interviews or given in test tasks.

### functional-javascript-workshop
![img7](https://github.com/Synkevych/kottans-backend/blob/master/node_basic_1/functional-javascript-workshop/fjw-img.png)   
Really liked the tasks with binding, call and recursion, they clarified the essence of their work.   

### stream-adventure
![img8](https://github.com/Synkevych/kottans-backend/blob/master/node_basic_1/stream-adventure/st-img.png)

## Memory Management
1. What's going to happen if program reaches maximum limit of stack ? 
- **"RangeError: Maximum call stack size exceeded"**; also known as StackOverflow;
- The Node.js will see that you start the same process, taking up more and more memory, and will automatically complete its execution.
- MixCallStackSize in my Chrome program = 12541
2. What's going to happen if program requests a big (more then 128KB) memory allocation on heap ? **Will be created private anonymous mapping using mmap**
Normally on Linux system, malloc() allocates memory from the heap, and adjusts the size of the heap as required, using sbrk. When allocating blocks of memory larger than MMAP_THRESHOLD bytes, the glibc malloc() implementation allocates the memory as a private anonymous mapping using mmap. MMAP_THRESHOLD is 128 kB by default, but is adjustable using mallopt.

3. What's the difference between Text and Data memory segments ?
- Text memory(string literals) is read only.
- Data memory(Objects, Arrays) is read and write.

4. Copy output of proc/vmmap command. 
Command ```vmmap -64 -p <PID>``` on MAC didn't work!

**Refletions**: 

At the beginning I didn't understand these tasks relate to memory management in the Node.js or in the OS.

Memory management was difficult part for understand.
Memory management mechanisms in different programming languages are quite different. There are various methods for optimizing memory usage and cleaning it, but none of them guarantee the correct operation of your application. Therefore, it is necessary to understand how the basic mechanisms of memory management for optimizing sentences.