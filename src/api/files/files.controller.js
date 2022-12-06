exports.upload = (req, res) => {
  res.json({ status: "success", data: { fileName: req.file.filename } });
};

exports.download = (req, res) => {
  const fileName = req.params.fileName;
  res.sendFile(fileName, { root: "uploads" });
};
