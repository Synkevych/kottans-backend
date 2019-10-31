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

## DNS - Domain Name System, IP address for your site
*host -t a google.com*

## host
command host show short info about site and dns server 
``` 
Synkevych-MB:~ sunkevu4$ host www.alza.cz
www.alza.cz has address 185.181.176.19
```

## dig 
Show more readable info for scripts and DNS server's configuration file
```
Synkevych-MB:~ sunkevu4$  dig www.alza.cz

; <<>> DiG 9.10.6 <<>> www.alza.cz
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12040
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4000
;; QUESTION SECTION:
;www.alza.cz.			IN	A

;; ANSWER SECTION:
www.alza.cz.		52	IN	A	185.181.176.19

;; Query time: 11 msec
;; SERVER: 2a00:1028:1:910::1#53(2a00:1028:1:910::1)
;; WHEN: Tue Oct 29 15:26:33 CET 2019
;; MSG SIZE  rcvd: 56
```

## DNS record types mean 
CNAME - canonical name 
AAAA (quad - A) - IPv6 address - joke since v9 addresses are four time longer than v4 addresses
NS - DNS name server - whar DNS servers have the records for that domain

A (Host address)
AAAA (IPv6 host address)
ALIAS (Auto resolved alias)
CNAME (Canonical name for an alias)
MX (Mail eXchange)
NS (Name Server)
PTR (Pointer)
SOA (Start Of Authority)
SRV (location of service)
TXT (Descriptive text)

### Apache - virtual hosts 

### NGiNX – multiple server blocks

# 256 - 1 bite = [1111|1111]
1 bite =  8 bit = 256 
512 - 2 bit 
32768 - 128 bit

4 bit - 16 disctinct value
8 bit - 32
# 65525 - the highest TCP port = 16 bite

# IPv4 32-bit 4 octet - 4,294,967,296 addresses

# Local nnetwork has only 8 - bit host part 
this is 1021 addresses are available for hosts 

/24 - 255.255.255.0
/16 - 255.255.0.0 

# 171.64.0.0/14 Stanford University

/14 - less than 2 octets of network part 
171 - all 8 bits fixed 
64 - only 6 bits fixed, 2 bits free [64, 65, 66, 67 - in the /14 netblock]

Subnet mask for /14 netblock - 255.252.0.0
18-bit host part = 2^18 addresses = 262144

ifconfig | less 

# Interfaces Quiz 
lo - loop back interface 
eth0 - internet interface


# Show default Gataway 
netstat -nr 

# Private addresses netblocks 
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16

# IPv6 128-Bits 16 Octets 

# Hardware - IP - TCP - HTTP 
