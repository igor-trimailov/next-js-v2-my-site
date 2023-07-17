export default function handler(req, res) {
    if (req.method === "POST") {
        console.log("posted: ", req.body);
        // save to db
        res.json({ message: "ok" });
    }
}
