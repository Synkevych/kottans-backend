## From HTTP to Ping

**Layer 			Protocols 			Concepts**
Apllication 	Http, ssh			URLs, passwords
Transport 		TCP, UDP			port number, sessions
Internnet		IP					IP address, routes
Hardware		wifi, ethernetm, dsl	signal stength, access points

```
If you log out of the Linux instance or close the terminal, the next time you want to use it you only need to run cd networking and vagrant ssh.
```

```
ping -c3 8.8.8.8
```
- send 3 paket from my comp to 8.8.8.8

```
printf 'HEAD / HTTP/1.1\r\nHost: en.wikipedia.org\r\n\r\n' | nc en.wikipedia.org 80
``` 
- get some information about server
**nc** – net cat, tool for mentally talking to internet services
**nc** – arbitrary TCP and UDP connections and listens
```
nc localhost 22
```
| - pipe, take the input and send this to output 

nc -l 3456 - *-l listent* on the port
nc localhost 3456 - plain TCP server, with no other layer between 

control + d - disconect from thee server 

```
printf "GET / HTTP/1.1\r\nHost: www.example.com\r\n\r\n" | nc www.example.com 80 > example.txt
```
- save the result to the file example.txt

The port range that a normal (non-root) user can listen on is 1024 through **65535**, using root you can listen on ports down to 1.

 *sudo lsof -i* what the process listen the ports 

```
printf 'HTTP/1.1 302 Moved\r\nLocation: https://www.eff.org/' | nc -l 2345
```
- redirect user to another page from the port 2345

# DNS - Domain Name System, IP address for your site
*host -t a google.com*


