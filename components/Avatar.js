function Avatar({url}) {
    return (
        <img
            loading={"lazy"}
            src={url}
            alt={"Profile pic"}
            className={"rounded-full h-10 cursor-pointer transition duration-250 transform hover:scale-110"}
        />
    );
}

export default Avatar;