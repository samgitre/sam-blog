(function() {
  angular
   .module("BitsyBlog", [])
   .controller("BitsyController", BitsyController);


   function BitsyController($scope, $http) {
      $scope.createPost = createPost;
      $scope.deletePost = deletePost;
      $scope.editPost = editPost;
      $scope.updatePost = updatePost;

      function blogInit() {
        getAllPosts();
      }
      blogInit();


      function updatePost(post) {
        console.log(post);

      $http.put("/api/blogPost/"+post._id, post)
      .success(getAllPosts);
      console.log(post);
      }

      function editPost(postId) {
        $http.get("/api/blogPost/"+postId)
        .success(function(post) {
          $scope.post = post;
            console.log(postId);
        });
      };

      function deletePost(postId) {
        $http.delete("/api/blogPost/"+postId)
        .success(getAllPosts);
        console.log(postId);
      };

     function getAllPosts() {
       $http.get("/api/blogPost")
       .success(function(allPosts) {
         $scope.allPosts = allPosts;
       });
     };

     function createPost(post) {
       console.log(post);
       $http.post("/api/blogPost", post)
       .success(getAllPosts);
     }
   };

})();
