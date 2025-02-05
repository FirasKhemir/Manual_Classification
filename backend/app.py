from flask import Flask, request
import os

app = Flask(__name__)
UPLOAD_FOLDER = "classified_images"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/classify", methods=["POST"])
def classify():
    file = request.files["file"]
    image_class = request.form["class"]
    class_folder = os.path.join(UPLOAD_FOLDER, image_class)
    os.makedirs(class_folder, exist_ok=True)
    file_path = os.path.join(class_folder, file.filename)
    file.save(file_path)
    return {"message": f"Saved to {file_path}"}, 200

if __name__ == "__main__":
    app.run(debug=True)
