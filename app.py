import flask
import requests
import os
import random
from tmdb import *

app = flask.Flask(__name__)

BASE_URL = "https://api.themoviedb.org/3"
query_params = {
    'api_key': os.getenv('API_KEY'),
}

def get_random_movie():
    favoriteMovies = [313369, 122906, 27205, 673, 38757, 2062] #lalaland, about time, inception, HP, tangled, ratatouille
    movie_id = random.choice(favoriteMovies) #chooses random movie_id from the list
    MOVIE_URL = BASE_URL + "/movie/" + str(movie_id)
    movie_response = requests.get(MOVIE_URL, params=query_params)
    return movie_response.json()

@app.route("/")
def get_movie():
    global movies # = get_random_movie()
    movies = get_random_movie()
    return flask.render_template(
        "index.html", 
        movie_title = get_title(movies),
        movie_tagline = get_tagline(movies),
        movie_genre = get_genre(movies),
        movie_image = get_image(movies),
        movie_wiki = get_wiki_page(movies)
    )

app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 8080)),
    debug=True
)

