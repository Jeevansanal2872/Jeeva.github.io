import os

def rename_image_files(folder):
    extensions = (".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif")

    files = [f for f in os.listdir(folder) if f.lower().endswith(extensions)]
    files.sort()

    # STEP 1 — Temporary rename
    for i, file in enumerate(files):
        old_path = os.path.join(folder, file)
        temp_path = os.path.join(folder, f"__temp__{i}{os.path.splitext(file)[1]}")
        os.rename(old_path, temp_path)

    # STEP 2 — Final rename
    temp_files = [f for f in os.listdir(folder) if f.startswith("__temp__")]
    temp_files.sort()

    for i, file in enumerate(temp_files, 1):
        ext = os.path.splitext(file)[1].lower()
        os.rename(
            os.path.join(folder, file),
            os.path.join(folder, f"{i}{ext}")
        )

    print(f"Renamed {len(temp_files)} images safely in {folder}")

if __name__ == "__main__":
    folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), "posters")
    rename_image_files(folder)
