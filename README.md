
# PayForBlob

Simple UI for allowing users to submit PayForBlob Transactions.

# Usage
Run payforblob.html in browser. Since the default node's ```/submit_pfb``` endpoint does not support cross-origin request when sending POST requests from the browser, you must disable the browser's security when running the HTML file or you have to edit, rebuild source code to accept CORS (Cross-Origin Resource Sharing) on server side.\
If you do not good at programming, follow ```Option 1. Run browser without CORS``` instruction.\
If you know about programming and Golang, then follow ```Option 2. Enable CORS on server side```.\

## Option 1. Run browser without CORS
This section focus only into Google Chrome, with other browsers you have to find a way to turn off the security feature by yourself.\
First, close all opened Chrome browser, then run the following command (NOT under ```root``` privilege):
```
google-chrome --disable-web-security -–allow-file-access-from-files --user-data-dir="<temp_folder>"
```
With ```<temp_folder>``` is path to temporary directory\
For example, your command might look something like this:
```
google-chrome --disable-web-security -–allow-file-access-from-files --user-data-dir="/home/emc/tempChrome"
```
Since Chrome 22+ you will get a notify message that says: You are using an unsupported command-line flag: --disable-web-security. Stability and security will suffer.
However you can just ignore that message.
Then open ```payforblob.html``` file with chrome browser just opened.\
If you do not disable the security feature of your browser you may get the following error when sending the request : "Access to XMLHttpRequest at '...' from origin '...' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource." 
## Option 2. Enable CORS on server side
First, stop ```celestia-lightd``` service
```
sudo systemctl stop celestia-lightd
```
Second, edit ```server.go``` file by running the following command:
```cd $HOME
cd celestia-node/
nano api/gateway/server.go
```
Add ```"github.com/rs/cors"``` to ```import``` section:
Then replace the contents of NewServer with the following:
```
func NewServer(address, port string) *Server {
	srvMux := mux.NewRouter()
	srvMux.Use(setContentType)

	server := &Server{
		srvMux: srvMux,
	}

	handler := cors.Default().Handler(srvMux)

	server.srv = &http.Server{
		Addr:    address + ":" + port,
		Handler: handler,
		// the amount of time allowed to read request headers. set to the default 2 seconds
		ReadHeaderTimeout: 2 * time.Second,
	}
	return server
}

```
Save it, rebuild and start service:
```
make build
make install
sudo systemctl start celestia-lightd
```
Then open ```payforblob.html``` in any browser you want to send PFB transactions.
## Sending transaction

In this application, we use default value for ```namespace_id``` is ```0c204d39600fddd3```, ```data``` is ```f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5```, ```gas_limit``` is ```90000``` and ```fee``` is ```2000```. You can change input parameters as you like \
Generate your own ```namespace_id``` and data values using Golang Playground created by Celestia in [here](https://go.dev/play/p/7ltvaj8lhRl)


## Screenshots

![Warning Screenshot](https://github.com/TrungKhanhNguyen/MonitoringPacket/blob/master/MonitoringPacket/Resources/Screenshot_4.png?raw=true)
\
![Warning Screenshot](https://github.com/TrungKhanhNguyen/MonitoringPacket/blob/master/MonitoringPacket/Resources/Screenshot_3.png?raw=true)

## Acknowledgements
 - [ Node API calls](https://docs.celestia.org/developers/node-tutorial/#submit-a-pfb-transaction)

