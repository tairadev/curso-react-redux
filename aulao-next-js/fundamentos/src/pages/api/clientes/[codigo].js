export default function handler(req, res) {
  let codigo = req.query.codigo;
  res
    .status(200)
    .json({
      id: codigo,
      nome: `Maria ${codigo}`,
      email: 'maria@maria.com'
    })
    .send();
}
