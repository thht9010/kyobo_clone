만들면서 시행착오 기록

```css
.search form {
  flex: 1;

  display: flex;
  align-items: center;
}
#ho {
  flex: 1;

  border: none;
  outline-style: none;
}
```

flex:1 ; 으로 검색창 문구와 검색 아이콘을 분리할 수 있다.

갑자기 메뉴리스트에 밑줄이 그여져서
li a 에 들어가서

```css
.main_list li a {
  text-decoration: none;
  /* 이게 왜 생긴건지 모르겠음; */
}
```

이렇게 해결함. 근데 왜 생긴거지?

. 이 생기는 현상 해결
list-style: none;
