const express = require('express');
const app = express();
const articles = [{ title: 'Example' }];
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

// 支持编码为JSON的请求消息体
app.use(bodyParser.json());
// 支持编码为表单的请求消息体
app.use(bodyParser.urlencoded({ extended: true }));

// 获取所有文章
app.get('/articles', (req, res) => {
  res.send(articles);
});

// 创建一篇文章
app.post('/articles', (req, res) => {
  const article = { title: req.body.title };
  articles.push(article);
  res.send(article);
});

// 获取指定文章
app.get('/articles/:id', (req, res) => {
  const id = req.params.id;
  console.log('Fetching:', id);
  res.send(articles[id]);
});

// 删除指定文章
app.delete('/articles/:id', (req, res) => {
  const id = req.params.id;
  console.log('Deleting:', id);
  delete articles[id];
  res.send({ message: 'Deleted' });
});

app.listen(app.get('port'), () => {
  console.log('App started on port', app.get('port'));
});

module.exports = app;
