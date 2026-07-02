from PIL import Image
import sys

def main():
    try:
        img = Image.open('public/assets/new_logo.png').convert("RGBA")
        datas = img.getdata()
        
        # Get background color from top-left pixel
        bg_color = datas[0]
        
        newData = []
        tolerance = 25  # adjust if it clips too much or too little
        
        for item in datas:
            if abs(item[0] - bg_color[0]) < tolerance and \
               abs(item[1] - bg_color[1]) < tolerance and \
               abs(item[2] - bg_color[2]) < tolerance:
                newData.append((255, 255, 255, 0)) # Transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Crop to bounding box of non-transparent pixels
        bbox = img.getbbox()
        if bbox:
            # Add a small padding back
            padding = 10
            bbox = (
                max(0, bbox[0] - padding),
                max(0, bbox[1] - padding),
                min(img.width, bbox[2] + padding),
                min(img.height, bbox[3] + padding)
            )
            img = img.crop(bbox)
            
        img.save('public/assets/new_logo_transparent.png', "PNG")
        print("Successfully created transparent and cropped logo.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
