// JSX code
const element = <h1>Hello World~!!</h1>;

// JSX code -> Javascript code로 변환하는 함수
// React.createElement()
React.creatElement(
    type,     // div, h1 등 html tag의 종류
    [props],  // html tag의 속성
    [...children] // 현재 element가 포함하고 있는 자식 element
)

// 간단한 JSX 적용/미적용 예제
// JSX 적용 code
const element1 = (
    <h1 className="greeting">
        Hello, World~!!
    </h1>
);

// JSX 미적용 code
const element2 = React.createElement(
    'h1',
    { className : 'greeting' },
    'Hello, World~!!'
);

// React.createElement()의 결과로 생성되는 객체
const element3 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world~!!'
    }
}


// React Hello 컴포넌트 생성 - JSX code 
class Hello extends React.Component{
    render(){
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById("root")
);

// React Hello 컴포넌트 생성 - JSX 미적용 code 
class Hello extends React.Component{
    render(){
        return React.creatElement('div',null,`Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.creatElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root')
);

// JSX 사용함 
<div>Hello, {name}</div>

// JSX 사용안함
React.createElement('div',null, `Hello, ${name}`);


// Injection Attacks 해킹을 방어할 수 있다.
const title = response.potentiallyMaliciousInput;

// 이 코드는 안전합니다. 
const element4 = <h1>{title}</h1>;

// JSX Code : JS + XML/HTML 
const name = "아이유";
const element5 = <h1>안녕, {name}</h1>;

// ReactDOM.render(
//     element,
//     document.getElementById('root');
// );

// JSX code 
function formatName(user){
    return user.firstName + '' + user.lastName;
};

const user = {
    firstName: "Jieun",
    lastName: "Lee"
};

const element6 = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

// JSX code
function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, Stranger.</h1>
}

// element의 속성에 값을 넣는 방법 
// 더블 쿼테이션 사이에 문자열을 넣는다.
const element7 = <div tabIndex="0"></div>;

// 중괄호({}) 사이에 JavaScript Code를 작성 
const element8 = <img src={user.avatarUrl}></img>;


// 자식(children)을 정의하는 방법
const element9 = (
    <div>
        <h1>브로커</h1>
        <h2>이지은, 송강호가 나온 영화</h2>
    </div>
);
































