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
- Text memory(string literals) or code segment is read only and fixed size.
- Data memory(Objects, Arrays) contains any global or static variables which have a pre-defined value and can be modified. .

4. Copy output of proc/vmmap command. 
Command ```vmmap -64 -p <PID>``` on MAC didn't work!
```
REGION TYPE                      START - END             [ VSIZE  RSDNT  DIRTY   SWAP] PRT/MAX SHRMOD PURGE    REGION DETAIL
__TEXT                 000000010fcd4000-000000010fd53000 [  508K   508K     0K     0K] r-x/r-x SM=COW          /bin/zsh
__DATA_CONST           000000010fd53000-000000010fd54000 [    4K     0K     0K     4K] r--/rw- SM=COW          /bin/zsh
__DATA                 000000010fd54000-000000010fd5a000 [   24K     0K     0K    24K] rw-/rw- SM=COW          /bin/zsh
__DATA                 000000010fd5a000-000000010fd5f000 [   20K     0K     0K    20K] rw-/rw- SM=COW          /bin/zsh
__LINKEDIT             000000010fd5f000-000000010fd74000 [   84K    24K     0K     0K] r--/r-- SM=COW          /bin/zsh
MALLOC metadata        000000010fd76000-000000010fd77000 [    4K     4K     4K     0K] r--/rwx SM=COW          DefaultMallocZone_0x10fd76000 zone structure
MALLOC metadata        000000010fd77000-000000010fd78000 [    4K     4K     4K     0K] rw-/rwx SM=COW 
MALLOC guard page      000000010fd78000-000000010fd79000 [    4K     0K     0K     0K] ---/rwx SM=COW 
MALLOC metadata        000000010fd79000-000000010fd7d000 [   16K    16K    16K     0K] rw-/rwx SM=COW         
MALLOC guard page      000000010fd7d000-000000010fd7e000 [    4K     0K     0K     0K] ---/rwx SM=COW         
MALLOC guard page      000000010fd7e000-000000010fd7f000 [    4K     0K     0K     0K] ---/rwx SM=NUL         
MALLOC metadata        000000010fd7f000-000000010fd83000 [   16K    16K    16K     0K] rw-/rwx SM=COW         
MALLOC guard page      000000010fd83000-000000010fd84000 [    4K     0K     0K     0K] ---/rwx SM=NUL         
MALLOC metadata        000000010fd84000-000000010fd85000 [    4K     4K     4K     0K] r--/rwx SM=COW         
MALLOC_LARGE           000000010fd85000-000000010fda0000 [  108K     4K     4K   104K] rw-/rwx SM=COW          DefaultMallocZone_0x10fd76000
MALLOC_LARGE (empty)   000000010fda0000-000000010fdb6000 [   88K     0K     0K     8K] rw-/rwx SM=COW         
shared memory          000000010fdb6000-000000010fdb7000 [    4K     4K     4K     0K] r--/r-- SM=SHM         
Activity Tracing       000000010fdb7000-000000010fdf7000 [  256K     0K     0K    20K] rw-/rwx SM=ALI PURGE=N 
VM_ALLOCATE            000000010fdf7000-000000010fdfb000 [   16K     0K     0K    16K] rw-/rwx SM=COW
MALLOC_TINY            00007fd882c00000-00007fd882d00000 [ 1024K    84K    84K   360K] rw-/rwx SM=PRV          DefaultMallocZone_0x10fd76000
MALLOC_TINY            00007fd882d00000-00007fd882e00000 [ 1024K   116K   116K   196K] rw-/rwx SM=PRV          DefaultMallocZone_0x10fd76000
MALLOC_TINY            00007fd882e00000-00007fd882f00000 [ 1024K    68K    68K   228K] rw-/rwx SM=COW          DefaultMallocZone_0x10fd76000
MALLOC_TINY            00007fd882f00000-00007fd883000000 [ 1024K    88K    88K   200K] rw-/rwx SM=COW          DefaultMallocZone_0x10fd76000
MALLOC_SMALL           00007fd883000000-00007fd883800000 [ 8192K     8K     8K   280K] rw-/rwx SM=COW          DefaultMallocZone_0x10fd76000
STACK GUARD            00007ffedbf2c000-00007ffedf72c000 [ 56.0M     0K     0K     0K] ---/rwx SM=NUL          stack guard for thread 0
Stack                  00007ffedf72c000-00007ffedff2c000 [ 8192K     4K     4K   372K] rw-/rwx SM=PRV          thread 0
__LINKEDIT             00007fffcf85a000-00007fffe5453000 [348.0M  9876K     0K     0K] r--/r-- SM=COW          dyld shared cache combined __LINKEDIT
shared memory          00007fffffe00000-00007fffffe01000 [    4K     4K     4K     0K] r--/r-- SM=SHM
shared memory          00007fffffee7000-00007fffffee8000 [    4K     4K     4K     0K] r-x/r-x SM=SHM         
```
```
Stack - 00007ffedf72c000-00007ffedff2c000
```
**Refletions**: 
At the beginning I didn't understand these tasks relate to memory management in the Node.js or in the OS.

Memory management was difficult part for understand.
Memory management mechanisms in different programming languages are quite different. There are various methods for optimizing memory usage and cleaning it, but none of them guarantee the correct operation of your application. Therefore, it is necessary to understand how the basic mechanisms of memory management for optimizing sentences.