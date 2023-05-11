import csv
import json
import os
import random
import sys

lorem_ipsum = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt ornare massa eget egestas purus. 
Id semper risus in hendrerit gravida rutrum quisque. Tortor dignissim convallis aenean et tortor at risus. Urna neque 
viverra justo nec ultrices dui. Amet risus nullam eget felis eget nunc lobortis. Tempus urna et pharetra pharetra massa 
massa. A condimentum vitae sapien pellentesque habitant. Odio euismod lacinia at quis risus sed vulputate odio ut. 
Enim neque volutpat ac tincidunt vitae semper. Bibendum enim facilisis gravida neque.

Adipiscing elit duis tristique sollicitudin. Risus quis varius quam quisque. Tellus integer feugiat scelerisque varius 
morbi enim nunc faucibus. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Nunc scelerisque viverra 
mauris in aliquam sem. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Quisque id diam vel quam. 
Diam volutpat commodo sed egestas egestas fringilla phasellus. Aenean vel elit scelerisque mauris pellentesque pulvinar. 
Vestibulum lorem sed risus ultricies. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. 
Duis ultricies lacus sed turpis tincidunt id aliquet.
""".replace('\n', '').replace(',', '').replace('.', '')

file_paths = os.listdir('b64_assets')


def generate_lorem_ipsum(length):
    return " ".join(random.sample(lorem_ipsum.split(" "), length))


def generate_price():
    dollar_value = random.randint(1, 20)
    cent_value = str(random.randint(0, 9)) + str(random.randint(0, 9))
    return f'${dollar_value}.{cent_value}'


if __name__ == '__main__':
    with open('test_product_data.csv', 'w+') as f:
        if 'name,price,description,category,stock,path\n' not in f.readline():
            f.write('name,price,description,category,stock,path,image\n')

        for image_p in file_paths:
            name = [word.capitalize() for word in image_p.split('.')[0].split('_')]
            if len(name) > 2:
                name = ' '.join(name[0:2])
            else:
                name = name[0]
            print(name)
            price = generate_price()
            description = generate_lorem_ipsum(random.randint(5, 10))
            category = generate_lorem_ipsum(1)
            stock = random.randint(0, 100)
            path = f'b64_assets/{image_p}'
            with open(path, 'r') as image_f:
                image = image_f.read()
            f.write(f'{name},{price},{description},{category},{stock},{image_p},{image}\n')

csv.field_size_limit(sys.maxsize)

firebase_products = {"products": {}}
with open('test_product_data.csv', 'r') as f:
    csvReader = csv.DictReader(f)
    for row in csvReader:
        firebase_products["products"][row["name"]] = row

with open('test_product_data.json', 'w') as f:
    jsonString = json.dumps(firebase_products, indent=4)
    f.write(jsonString)
