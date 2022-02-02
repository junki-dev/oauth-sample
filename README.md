# OAuth Study

## 목표 생활코딩 OAuth 2.0 수업을 보며 아주 기본적인 개념과 컨셉을 익히고 따라해본다.

## 구성원

- client
    - 개발자가 만들 어플리케이션
    - ex) junki.com
- resource server
    - 사용자 정보(Resource)를 저장하고 있는 곳
    - ex) Google
- resource owner
    - 사용자 정보(Resource) 주인
    - ex) Junki


## 절차

1. client가 resource server에 어떤 서비스를 사용할지 등록한다.
2. resource server가 client에게 client id와 client secret을 준다.
3. resource owner에게 client가 어떤 서비스를 사용할 수 있도록 허락을 구한다.
4. resource owner가 허락해준다.
5. resource server가 client에게 code라는 resource owner의 어떤 데이터를 볼 수 있는 비밀번호를 준다.
6. client는 code, id, secret을 resource server에게 준다.
7. resource server는 자신이 가지고 있는 정보와 client에게 받은 code, id, secret을 비교해 client를 검증한다.
8. resource server가 client에게 access token을 준다.
9. client는 access token을 db에 저장해 소중하게 보관한다.
10. client가 resource server에게 access token을 주며 데이터를 요청한다.
11. resource server에게 받은 데이터를 resource owner에게 가공해서 보여준다.

## 낙서장
- access_type
    - online / offline 두 가지가 있다.
    - offline: resource server가 access token을 줄 때 refresh token을 같이 준다.
- redirect_uri
    - code값을 줄 때 client의 어디로 보내줄지를 정한다.

    