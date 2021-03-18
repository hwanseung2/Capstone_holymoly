import sys

#sys.stdout.write(sys.stdin.read())
# 출력값
# hello
# world

for line in sys.stdin:
	    print(line[:-1]) #[:-1]은 맨 오른쪽 값을 제외하고 모두를 의미
# 출력값
# hello
# world
#print(sys.argv[1])