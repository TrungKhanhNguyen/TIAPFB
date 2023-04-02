
# PayForBlob

Simple UI for allowing users to submit PayForBlob Transactions.

# Usage
Run payforblob.html in browser. Since the default node's ```/submit_pfb``` endpoint does not support CORS when sending POST requests from the browser, you must disable the browser's security when running the HTML file.
Although, you are strongly recommended to edit, rebuild source code to accept CORS on server side. If you already done that, you can skip ```Run browser without CORS``` part, just open browser as usual, no need to disable security feature



## Run browser without CORS
This section focus only into Google Chrome, with other browsers you have to find a way to turn off the security feature by yourself\
Close all opened Chrome browser, then run the following command:
```
google-chrome --disable-web-security -–allow-file-access-from-files --user-data-dir="<temp_folder>"
```
With ```<temp_folder>``` is path to temporary directory\
For example, your command might look something like this:
```
emc@ubuntu:~$ google-chrome --disable-web-security -–allow-file-access-from-files --user-data-dir="/home/emc/tempChrome"
```
Since Chrome 22+ you will get a notify message that says: You are using an unsupported command-line flag: --disable-web-security. Stability and security will suffer.
However you can just ignore that message.
Then open ```payforblob.html``` file with chrome browser just opened

## Sending transaction

In this application, we use default value for ```namespace_id``` is ```0c204d39600fddd3```, ```data``` is ```f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5```, ```gas_limit``` is ```90000``` and ```fee``` is ```2000```. You can change input parameters as you like \
Generate your own ```namespace_id``` and data values using Golang Playground created by Celestia in [here](https://go.dev/play/p/7ltvaj8lhRl)


## Screenshots

![Warning Screenshot](https://github.com/TrungKhanhNguyen/MonitoringPacket/blob/master/MonitoringPacket/Resources/Screenshot_4.png?raw=true)
\
![Warning Screenshot](https://github.com/TrungKhanhNguyen/MonitoringPacket/blob/master/MonitoringPacket/Resources/Screenshot_3.png?raw=true)

## Acknowledgements
 - [ Node API calls](https://docs.celestia.org/developers/node-tutorial/#submit-a-pfb-transaction)

