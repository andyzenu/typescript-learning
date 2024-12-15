const HelloWorld: React.FC<{ name?: string }> = ({ name }) => {
    return (
        <div>
            <h1>Hello, {name ? name : 'World'}!</h1>
        </div>
    );
};

export default HelloWorld;