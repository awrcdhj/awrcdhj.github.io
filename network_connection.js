{
	"//": "tcp超时, 默认600秒",
	"Tcp_timeout": 600,

	"//": "udp超时, 默认30秒",
	"Udp_timeout": 30,

	"//": "http_tunnel监听地址, 可设置多个",
	"listen_addr": [":16384", ":8080"],

	"//": "设定请求头中获取host的key, 默认Host",
	"proxy_key": "Host",

	"//": "加密密码, 默认没有密码(普通http_tunnel代理)",
	"encrypt_password": "LOVE951129864@12",

	"//": "开启tcpDNS转udpDNS, 可稍微加快DNS解析速度, 默认关闭",
	"Enable_dns_tcpOverUdp": true,

	"//": "开启httpDNS, httpDNS无需http_tunnel握手, 可稍微加快DNS解析速度, 默认关闭",
	"Enable_httpDNS": true,

	"//": "开启tcpFastOpen, 可稍微加快创建连接速度(免流可能不适用), 默认关闭",
	"Enable_TFO": true,

	"//": "以下是tls配置",
	"Tls": {
		"//": "tls监听地址, 可设置多个",
		"listen_addr": ["127.0.0.i:16384","[::1]:1082",":8081"],

		"//": "自动生成指定host的ssl/tls证书(如果留空则所有host都可以连接)",
		"AutoCertHosts": ["m.baidu.com", "pull.free.video.10010.com","yaohuo.me","mymy.ip"],

		"//": "手动指定cert和key文件, 两者必须同时存在",
		"cert_file": "Shadowrocket.cer",
		"key_file": "Shadowrocket.p12"
	}
}
 
