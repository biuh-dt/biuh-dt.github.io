
def getIP():
    import requests
    response = requests.get('https://ipinfo.io/ip')
    #response = requests.get('checkip.amazonaws.com')
    #response = requests.get('http://cip.cc')
    #response = requests.get('https://ifconfig.me/ip')
    #response = requests.get('https://api.ipify.cn?format=json')
    # 检查请求是否成功
    if response.status_code == 200:
        # 获取返回值并赋值给 this_ip
        this_out = response.text
        #this_out = this_out.split('"')[3]
        #this_out=this_out.split('<pre>')[1].split('</pre>')[0].split('\n')[0].split(':')[1].strip()
    else:
        this_out = 'Error:'+response.status_code
    return(this_out)    

def getStat():
    import subprocess as sp
    this_sp=sp.Popen(['iostat'], stdout=sp.PIPE, stderr=sp.PIPE)
    this_sp.wait()
    # 获取命令的输出和错误信息
    stdout, stderr = this_sp.communicate()
    this_out=stdout.decode('utf-8')
    return(this_out)

def getDate():
    from datetime import datetime
    current_time = datetime.now()
    readable_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
    return(readable_time)    

def sleepTime(sleep_time):
    import time
    this_time=sleep_time
    time.sleep(this_time)

def randomTime(sleep_time):
    import random
    this_time=sleep_time+sleep_time*(random.random()-0.5)*2*0.1
    return(this_time)
    #time.sleep(this_time)


log_file = '/home/zhangfeng/projects/biuh-dt.github.io/log.txt'
ip_file = '/home/zhangfeng/projects/biuh-dt.github.io/ip.txt'
time_file = '/home/zhangfeng/projects/biuh-dt.github.io/time.txt'

import subprocess as sp
import time
# 无限循环，每隔time执行一次脚本
while True:
    sleep_time=float(open(time_file).read())
    this_sleep_time=randomTime(sleep_time)
    ###########################
    this_ip=getIP()
    this_date=getDate()
    #this_stat=getStat()
    this_info='\n'.join([this_ip,'\n',
               'Last updated: '+this_date,'\n',
               'Next update: '+str(round(this_sleep_time,3))+'s',
               ])
    try:
        #################
        sp.Popen(['git', 'pull','origin','main'],shell=False).wait()
        #######
        open(ip_file,'w').write(this_info)
        sp.Popen(['git','add','ip.txt' ],shell=False).wait()
        sp.Popen(['git','commit','-m',"'Update ip.txt'" ],shell=False).wait()
        sp.Popen(['git','push','origin','main' ],shell=False).wait()
        #######
        sp.Popen(['git','add','updateIP.py' ],shell=False).wait()
        sp.Popen(['git','commit','-m',"'Update updateIP.py'" ],shell=False).wait()
        sp.Popen(['git','push','origin','main' ],shell=False).wait()
        #######
        sp.Popen(['cp', '/etc/systemd/system/updateIP.service','/home/zhangfeng/projects/biuh-dt.github.io'],shell=False).wait()
        sp.Popen(['git','add','updateIP.service' ],shell=False).wait()
        sp.Popen(['git','commit','-m',"'Update updateIP.service'" ],shell=False).wait()
        sp.Popen(['git','push','origin','main' ],shell=False).wait()
        #################
        open(log_file,'a').write(this_info)
        print(this_info)
    except Exception as e:
        print("Error:"+str(e))
        pass
    # 等待time秒
    time.sleep(this_sleep_time) 
