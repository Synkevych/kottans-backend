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
- **"RangeError: Maximum call stack size exceeded"**, also known as StackOverflow;
- The Node.js will see that you start the same process, taking up more and more memory, and will automatically complete its execution.
- MaxCallStackSize in my Chrome program = 12541

2. What's going to happen if program requests a big (more then 128KB) memory allocation on heap ?   
**Will be created private anonymous mapping using mmap**.   
Normally on Linux system, malloc() allocates memory from the heap, and adjusts the size of the heap as required, using sbrk. When allocating blocks of memory larger than MMAP_THRESHOLD bytes, the glibc malloc() implementation allocates the memory as a private anonymous mapping using mmap. MMAP_THRESHOLD is 128 kB by default, but is adjustable using mallopt.

3. What's the difference between Text and Data memory segments ?
- Text memory(string literals) or code segment is read only and fixed size.
- Data memory(Objects, Arrays) contains any global or static variables which have a pre-defined value and can be modified. .

4. Copy output of proc/vmmap command. 
Command ```vmmap -64 -p <PID>``` on MAC didn't work!
```
00400000-004ef000 r-xp 00000000 08:01 262154                             /bin/bash
006ef000-006f0000 r--p 000ef000 08:01 262154                             /bin/bash
006f0000-006f9000 rw-p 000f0000 08:01 262154                             /bin/bash
006f9000-006ff000 rw-p 00000000 00:00 0 
0139a000-01576000 rw-p 00000000 00:00 0                                  [heap]
7f2d19fd6000-7f2d19fe1000 r-xp 00000000 08:01 6297                       /lib/x86_64-linux-gnu/libnss_files-2.19.so
7f2d19fe1000-7f2d1a1e0000 ---p 0000b000 08:01 6297                       /lib/x86_64-linux-gnu/libnss_files-2.19.so
7f2d1a1e2000-7f2d1a1ed000 r-xp 00000000 08:01 6307                       /lib/x86_64-linux-gnu/libnss_nis-2.19.so
7f2d1a3ed000-7f2d1a3ee000 rw-p 0000b000 08:01 6307                       /lib/x86_64-linux-gnu/libnss_nis-2.19.so
7f2d1a3ee000-7f2d1a405000 r-xp 00000000 08:01 6291                       /lib/x86_64-linux-gnu/libnsl-2.19.so
7f2d1a605000-7f2d1a606000 rw-p 00017000 08:01 6291                       /lib/x86_64-linux-gnu/libnsl-2.19.so
7f2d1a606000-7f2d1a608000 rw-p 00000000 00:00 0 
7f2d1a608000-7f2d1a611000 r-xp 00000000 08:01 6293                       /lib/x86_64-linux-gnu/libnss_compat-2.19.so
7f2d1a812000-7f2d1b05e000 r--p 00000000 08:01 140372                     /usr/lib/locale/locale-archive
7f2d1b41c000-7f2d1b41e000 rw-p 001be000 08:01 6222                       /lib/x86_64-linux-gnu/libc-2.19.so
7f2d1b41e000-7f2d1b423000 rw-p 00000000 00:00 0 
7f2d1b423000-7f2d1b426000 r-xp 00000000 08:01 6239                       /lib/x86_64-linux-gnu/libdl-2.19.so
7f2d1b850000-7f2d1b873000 r-xp 00000000 08:01 6198                       /lib/x86_64-linux-gnu/ld-2.19.so
7f2d1ba59000-7f2d1ba5c000 rw-p 00000000 00:00 0 
7f2d1ba69000-7f2d1ba70000 r--s 00000000 08:01 266947                     /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache
7f2d1ba70000-7f2d1ba72000 rw-p 00000000 00:00 0 
7f2d1ba72000-7f2d1ba73000 r--p 00022000 08:01 6198                       /lib/x86_64-linux-gnu/ld-2.19.so
7f2d1ba73000-7f2d1ba74000 rw-p 00023000 08:01 6198                       /lib/x86_64-linux-gnu/ld-2.19.so
7f2d1ba74000-7f2d1ba75000 rw-p 00000000 00:00 0 
7ffd3c78f000-7ffd3c7b0000 rw-p 00000000 00:00 0                          [stack]
7ffd3c7f2000-7ffd3c7f4000 r--p 00000000 00:00 0                          [vvar]
7ffd3c7f4000-7ffd3c7f6000 r-xp 00000000 00:00 0                          [vdso]
ffffffffff600000-ffffffffff601000 r-xp 00000000 00:00 0                  [vsyscall]     
```
```
Heap - 0139a000-01576000, Stack - 7ffd3c78f000-7ffd3c7b0000, MMS - 7f2d19fd6000-7f2d19fe1000;
```
**Refletions**: 
At the beginning on my Mac OS vmmap command shows detailed information in which it is difficult to find heap, stack and MMS. So I used Ubuntu to do that.


I remember that we passed this at the institute, but the lecturer was bad and that part was difficult to remember.
Memory management mechanisms in different programming languages are quite different. There are various methods for optimizing memory usage and cleaning it, but none of them guarantee the correct operation of your application. Therefore, it is necessary to understand how the basic mechanisms of memory management for optimizing sentences.

## TCP. UDP. Network

1. Internet 101 - #done

2. Networking for Web Developers

3. How DNS Works

4. TCP Port Sniffer 👃

