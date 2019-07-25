/*
So far we have only used the "render" component

We can change these to "stateless component functions"

If your component only has render and proptypes, it can be converted to a stateless functional component in pure JS, like this:


const Header = (props) => (
    <header className="top">
    <h1>Catch
    <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
    </span>
    Day
    </h1>
    <h3 className="tagline">
        <span>{props.tagline}</span>
    </h3>
</header>
);




*/