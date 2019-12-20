alert('....Loading.... ')
jQuery(document).ready(function(){
    axios.get('http://csc225.mockable.io/movies')
        .then(function(response){
             console.log(response.data);
            var moviesHTML = response.data.map(function(movie){
                return '<p class="movie" data-movie="'
                    + movie.id+'">'
                    + movie.title + '</p>';
               
            })
            $('#movies').html(moviesHTML);
       
        });
  
        $('body').on('click', '.movie',function(){
           var id = $(this).data('movie');
           var url = 'http://csc225.mockable.io/movies' + id;
           $('#current-movie').html('...LOADING, Please be Patient...');
           axios.get(url).then(function(response){
               var movie = response.data;
               var movieHTML = '<p>' + movie.id + '</p>';
                     movieHTML += '<p>' +movie.title +'</p>';
                     movieHTML += '<p>' +movie.director + '</p>';
                $('#current-movie').html(movieHTML);
            })
        });
       
  
 });//axios I want you to get the response from that
    //website