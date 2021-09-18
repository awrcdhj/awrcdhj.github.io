#!TITLE=CONCURRNt_PARSING_OF_(DNS-SERVER)
#!DNS_SERVER_TOTAL_LINES=130
#!SYSTEM=IOS
#!VAR=10000
#!echo | awk -v VARIABLE=$VAR '{ print VARIABLE } END{ print "end" }' file
#!awk '( BEGIN VARIABLE=&dns-server)
#!=$(Host)'{ LocalHost }
#!LocalHost_Dns-Server'(Doh-Server){{print VARIABLE}}
[Service]
 -localhost$dns-server=119.29.29.29
 -localhost$dns-server=74.82.42.42
 -localhost$dns-server=1.2.4.8
 -localhost$dns-server=210.2.4.8
 -localhost$dns-server=223.5.5.5
 -localhost$dns-server=223.6.6.6
 -localhost$dns-server=119.28.28.28
 -localhost$dns-server=1.1.1.1
 -localhost$dns-server=1.0.0.1
 -localhost$dns-server=180.76.76.76
 -localhost$dns-server=182.254.116.116
 -localhost$dns-server=101.101.101.101
 -localhost$dns-server=101.102.103.104
 -localhost$dns-server=80.80.80.80
 -localhost$dns-server=80.80.81.81
 -localhost$dns-server=4.2.2.1
 -localhost$dns-server=4.2.2.2
 -localhost$dns-server=112.121.178.187
 -localhost$dns-server=203.80.96.10
 -localhost$dns-server=203.80.96.9
 -localhost$dns-server=123.206.61.167
 -localhost$dns-server=119.29.105.234
 -localhost$dns-server=223.113.97.99
 -localhost$dns-server=123.125.81.6
 -localhost$dns-server=140.207.198.6
 -localhost$dns-server=115.159.157.26 
 -localhost$dns-server=115.159.158.38
 -localhost$dns-server=103.16.131.77
 -localhost$dns-server=13.49.175.86
 -localhost$dns-server=104.21.57.110
 -localhost$dns-server=172.67.145.168
 -localhost$dns-server=8.20.247.2
 -localhost$dns-server=37.120.152.235
 -localhost$dns-server=37.120.236.11
 -localhost$dns-server=37.120.142.115
 -localhost$dns-server=37.120.232.43
 -localhost$dns-server=45.153.187.96
 -localhost$dns-server=72.11.134.90
 -localhost$dns-server=77.88.8.78
 -localhost$dns-server=217.169.20.23
 -localhost$dns-server=51.158.166.97
 -localhost$dns-server=149.154.153.153
 -localhost$dns-server=94.140.14.14
 -localhost$dns-server=176.103.130.130
 -localhost$dns-server=94.140.14.15
 -localhost$dns-server=176.103.130.132
 -localhost$dns-server=94.140.14.140
 -localhost$dns-server=45.67.219.208
 -localhost$dns-server=5.2.75.75
 -localhost$dns-server=95.181.155.140
 -localhost$dns-server=51.15.124.208
 -localhost$dns-server=45.79.120.233
 -localhost$dns-server=185.253.154.66
 -localhost$dns-server=193.70.85.11
 -localhost$dns-server=13.49.175.86
 -localhost$dns-server=104.155.237.225
 -localhost$dns-server=185.194.94.71
 -localhost$dns-server=208.67.220.220
 -localhost$dns-server=185.228.168.10
 -localhost$dns-server=1.1.1.3
 -localhost$dns-server=1.0.0.3
 -localhost$dns-server=95.217.213.94
 -localhost$dns-server=212.78.94.4
 -localhost$dns-server=23.226.134.242
 -localhost$dns-server=182.254.116.116
 -localhost$dns-server=80.80.81.81
 -localhost$dns-server=80.80.80.80
 -localhost$dns-server=210.2.1.1
 -localhost$dns-server=210.2.2.2
 -localhost$dns-server=101.226.4
 -localhost$dns-server=218.30.118.6
 -localhost$dns-server=208.67.222.222
 -localhost$dns-server=208.67.222.220
 doh-server=https://dns.wevpn.com/dns-query
 doh-server=https://dns-weblock.wevpn.com/dns-query
 doh-server=https://ordns.he.net/dns-query
 doh-server=https://doh.applied-privacy.net/query  //doh-dot.applied-privacy.net
 doh-server=https://dns.gooele/dns-query
 doh-server=https://dns64.dns.google/dns-query
 doh-server=https://dns10.quad9.net/dns-query
 doh-server=https://private.canadianshield.cira.ca/dns-query
 doh-server=https://doh.doh.my.id/dns-query
 doh-server=https://doh-de.blahdns.com/dns-query
 doh-server=https://doh.pub/dns-query
 doh-server=https://rubyfish.cn/dns-query
 doh-server=https://dns.rubyfish.cn/dns-query
 doh-server=https://doh.xeton.dev/dns-query
 doh-server=https://dns.brahma.world/dns-query //dns-server=13.49.175.86
 doh-server=https://ordns.he.net/dns-query //dns-server=74.82.42.42
 doh-server=dnsse.alekberg.net/dns-query //dns-server=45.153.187.96
 doh-server=https://dns.aa.net.uk/dns-query //dns-server=217.169.20.23,dns-server=51.158.166.97,dns-server=2001:bc8:1824:738:1
 doh-server=https://adfree.usableprivacy.net/dns-query //dns-server=149.154.153.153,dns-server=94.140.14.14/5443
 doh-server=https://dns.adguard.com/dns-query //dns-server=176.103.130.130,dns-server=94.140.14.15/5443
 doh-server=https://dns-family.adguard.com/dns-query //dns-server=176.103.130.132,dns-server=2a10:50c0::ad1:ff/5443,dns-server=94.140.14.140/5443
 doh-server=https://doh.in.ahadns.net/dns-query //dns-server=[2400:8904:e001:43::43]
 doh-server=https://doh.la.ahadns.net/dns-query //45.67.219.208,dns-server=[2a04:bdc7:100:70::70]
 doh-server=https://doh.nl.ahadns.net/dns-query //dns-server=5.2.75.75,dns-server=[2a04:52c0:101:75::75]
 doh-server=https://dns.alidns.com/dns-query //dns-server=223.5.5.5,dns-server=95.181.155.140/8443
 doh-server=https://dnsnl-noads.alekberg.net/dns-query //dns-server=51.15.124.208/4343,doh-server=2001:bc8:1830:2018:1/4343
