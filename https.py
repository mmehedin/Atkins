#!/usr/bin/python
print "Hello"
import BaseHTTPServer, SimpleHTTPServer
import ssl

web_server = BaseHTTPServer.HTTPServer(('localhost', 9000), SimpleHTTPServer.SimpleHTTPRequestHandler)
web_server.socket = ssl.wrap_socket (web_server.socket,server_side=True, certfile="mydomain.crt", keyfile="mydomain.key")
print "ready socket"
web_server.serve_forever()

print "https server started: https://localhost:9000"
