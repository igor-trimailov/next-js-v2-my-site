const withAuth = () => {
    // check auth here and wrap the handler
    // this is sloppy somehow?
    // remember, you won't get local storage here, so probably only cookies?
    return (req, res) => {};
};

export default function handler(req, res) {
    // by default this will be sent or any type of request
    // if you want to handle specific requests, you need to check it yourself i.e.
    // if (req.method === 'POST') {}
    res.json({ data: { me: true } });
}
