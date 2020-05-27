
要获取一篇文章
curl http://localhost:3000/articles/0

要获取所有文章
curl http://localhost:3000/articles

curl -X POST http://localhost:3000/articles

甚至可以删除一篇文章
curl -X DELETE http://localhost:3000/articles/0

增加一篇新文章
curl --data "title=Example 2" http://localhost:3000/articles
