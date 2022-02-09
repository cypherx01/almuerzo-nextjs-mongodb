import clientPromise from "../../lib/mongodb";

// podemos encontrar mas base de datos aquí:
// https://cloud.mongodb.com/v2/6017672b983e97532ec1c0ef#metrics/replicaSet/6201707a5bf2d72cccb07e08/explorer/sample_mflix/movies/find

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix"); // Nombre de la base de datos

  const movies = await db
    .collection("users")
    .find({})
    .sort({ metacritic: -1 })
    //.limit(20)
    .toArray();

    res.json(movies);

    // switch (req.method) {
    //   case "POST":
    //     let bodyObject = JSON.parse(req.body);
    //     let newPost = await db.collection("movies").insertOne(bodyObject);
    //     res.json(newPost.ops[0]);
    //     break;
    //   case "GET":
    //     const posts = await db.collection("movies").find({}).toArray();
    //     // res.json({ status: 200, data: posts });
    //     res.json(posts); // obtenemos solo la data
    //     break;
    // }
}