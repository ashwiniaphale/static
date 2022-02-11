# pylint: disable=invalid-name
# pylint: disable=line-too-long
# pylint: disable=trailing-whitespace
# pylint: disable=trailing-newlines
# pylint: disable=missing-module-docstring
# pylint: disable=global-variable-undefined
import os
import random
import flask
import requests
from tmdb import get_title, get_tagline, get_genre, get_image, get_wiki_page

app = flask.Flask(__name__)

BASE_URL = "https://api.themoviedb.org/3"
QUERY_PARAMS = {
    'api_key': os.getenv('API_KEY'),
}

def get_random_movie():
    '''randomizes the movieId from the list of movieIds, and builds movie url'''
    favorite_movies = [313369, 122906, 27205, 673, 38757, 2062] #lalaland, about time, inception, HP, tangled, ratatouille
    movie_id = random.choice(favorite_movies) #chooses random movie_id from the list
    movie_url = BASE_URL + "/movie/" + str(movie_id)
    movie_response = requests.get(movie_url, params=QUERY_PARAMS)
    return movie_response.json()

@app.route("/")
def get_movie():
    '''calls functions from tmdb and renders the output to flask'''
    global movies # = get_random_movie()
    movies = get_random_movie()
    return flask.render_template(
        "index.html", 
        movie_title=get_title(movies),
        movie_tagline=get_tagline(movies),
        movie_genre=get_genre(movies),
        movie_image=get_image(movies),
        movie_wiki=get_wiki_page(movies)
    )

app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', "8080")),
    debug=True
)

