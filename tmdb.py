import requests
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())


BASE_URL = "https://api.themoviedb.org/3"

CONFIG_URL = BASE_URL + "/configuration" 

query_params = {
    'api_key': os.getenv('API_KEY'),
}
config_response = requests.get(CONFIG_URL, params=query_params)
configuration = config_response.json()

def get_title(movies):
    return movies["title"]

def get_tagline(movies):
    return movies["tagline"]

def get_genre(movies):
    movie_genre = movies["genres"]
    genres = ""
    for movie in movie_genre:
        genres = genres + str(movie['name']) + "," + " "
    genres = genres[:-2]
    return genres

def get_image(movies):
    image_base_url = configuration["images"]["base_url"]
    image_size = configuration["images"]["poster_sizes"][4]
    final_url = image_base_url + "/" + image_size + movies["poster_path"]
    return final_url

#used the sample code within the media wiki (API:Search)
def get_wiki_page(movies):

    S = requests.Session()

    WIKI_BASE_URL = "https://en.wikipedia.org/w/api.php"
    what_to_search = get_title(movies)

    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": what_to_search
    }

    response = S.get(url=WIKI_BASE_URL, params=params)
    wiki_page = response.json()

    movie_title = wiki_page["query"]["search"][0]["title"]
    print("https://en.wikipedia.org/wiki/" + movie_title )
    url_with_space = "https://en.wikipedia.org/wiki/" + movie_title
    return url_with_space.replace(" ", "_")
