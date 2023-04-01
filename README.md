
# PayForBlob

Simple UI for allowing users to submit PayForBlob Transactions.

# Usage
Since the default node's ```/submit_pfb``` endpoint does not support CORS when sending POST requests from the browser, you must disable the browser's security when running the HTML file.
Although, you are strongly recommended to edit, rebuild source code to accept CORS on server side. If you already done that, you can skip Run Chrome without CORS part.



## Open Chrome without CORS
Close all opened Chrome browser, then run the following command:
```
google-chrome --disable-web-security -–allow-file-access-from-files --user-data-dir="<temp_folder>"
```
With ```<temp_folder>``` is path to temporary directory\
For example, your command might look something like this:
```
emc@ubuntu:~$ google-chrome --disable-web-security -–allow-file-access-from-files --user-data-dir="/home/emc/tempChrome"
```
\
Since Chrome 22+ you will get a notify message that says: You are using an unsupported command-line flag: --disable-web-security. Stability and security will suffer.
However you can just ignore that message.

## Sending transaction

In this application, we use default value for ```namespace_id``` is ```0c204d39600fddd3```, ```data``` is ```f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5```, ```gas_limit``` is ```90000``` and ```fee``` is ```2000```.\
You can generate your own ```namespace_id``` and data values using Golang Playground created by Celestia in [here](https://go.dev/play/p/7ltvaj8lhRl)


## Screenshots

![Warning Screenshot](https://github.com/TrungKhanhNguyen/MonitoringPacket/blob/master/MonitoringPacket/Resources/Screenshot_4.png?raw=true)
\
![Warning Screenshot](https://github.com/TrungKhanhNguyen/MonitoringPacket/blob/master/MonitoringPacket/Resources/Screenshot_3.png?raw=true)

## Acknowledgements
 - [ Node API calls](https://docs.celestia.org/developers/node-tutorial/#submit-a-pfb-transaction)

