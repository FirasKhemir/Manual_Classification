import os
import shutil
from flask import Flask, jsonify, request, send_file, render_template, send_from_directory

app = Flask(__name__)

SOURCE_FOLDER = "data"
DEST_FOLDERS = {
    "one_year": "one_year",
    "two_years": "two_years",
    "three_years": "three_years",
    "four_years": "four_years",
}

@app.route('/')
def home():
    return render_template('index.html')

""" # Define the path where images are stored (outside the static folder)
IMAGE_DIR = os.path.abspath("data")  # Adjust the path based on your structure

@app.route('/images/<filename>')
def get_image(filename):
    return send_from_directory(IMAGE_DIR, filename) """

# Ensure destination folders exist
for folder in DEST_FOLDERS.values():
    os.makedirs(folder, exist_ok=True)

# Get the list of images in the source folder
def get_image_list():
    return [f for f in os.listdir(SOURCE_FOLDER) if os.path.isfile(os.path.join(SOURCE_FOLDER, f))]

@app.route('/get_image', methods=['GET'])
def get_image():
    images = get_image_list()
    if not images:
        return jsonify({"status": "done", "message": "No more images to classify"}), 200
    return jsonify({"status": "success", "image": images[0]})

@app.route('/classify', methods=['POST'])
def classify():
    data = request.json
    image_name = data.get("image")
    category = data.get("category")

    if category not in DEST_FOLDERS:
        return jsonify({"status": "error", "message": "Invalid category"}), 400

    source_path = os.path.join(SOURCE_FOLDER, image_name)
    dest_path = os.path.join("classified",DEST_FOLDERS[category], image_name)

    if os.path.exists(source_path):
        shutil.move(source_path, dest_path)
        return jsonify({"status": "success", "message": f"Image moved to {category}"}), 200
    else:
        return jsonify({"status": "error", "message": "Image not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
