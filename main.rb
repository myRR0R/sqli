require 'sinatra'
require 'json'
require 'mathn'
get '/' do 
  send_file 'index.html'
end

get '/linear_equation.js' do
  send_file 'linear_equation.js'
end

get '/square_equation.js' do 
  send_file 'square_equation.js'
end

get '/index.js' do 
  send_file 'index.js'
end

get '/style.css' do
  send_file 'style.css'
end

post '/dol' do

g = params['g'].to_f
h = params['h'].to_f


par = params

x = (-h/g).to_f.round 3

    content_type:json
    {:x => x, :p => par}.to_json
end

post '/dos' do

a = params['a'].to_f
b = params['b'].to_f
c = params['c'].to_f

par = params

d = Math.sqrt(b**2 - (4 * a * c))

e = (-b+d)/(2*a)

f = (-b-d)/(2*a)

    content_type:json
    {:e => e, :f => f, :d => d, :p => par}.to_json
end
