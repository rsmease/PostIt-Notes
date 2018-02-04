# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.destroy_all

def get_random_color
    ['blue', 'pink', 'yellow', 'green'].sample
end

def get_random_title
    Faker::Commerce.department
end

def get_random_body
    random_list = []
    5.times do 
        random_list.push(Faker::Commerce.product_name)
    end
    random_list.join(", ")
end

note1 = Note.create(title: get_random_title, color: get_random_color, body: get_random_body)
note2 = Note.create(title: get_random_title, color: get_random_color, body: get_random_body)
note3 = Note.create(title: get_random_title, color: get_random_color, body: get_random_body)
note4 = Note.create(title: get_random_title, color: get_random_color, body: get_random_body)
note5 = Note.create(title: get_random_title, color: get_random_color, body: get_random_body)
note6 = Note.create(title: get_random_title, color: get_random_color, body: get_random_body)

