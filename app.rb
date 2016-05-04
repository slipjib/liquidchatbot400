require 'sinatra/base'
require 'ruby_cowsay'
require 'faker'

class HelloWorldApp < Sinatra::Base
	set :erb, layout: :'layout'
	set :static, true
	set :root, File.dirname(__FILE__)

	get '/' do
		erb(:index2)
	end

	get '/dino' do
		erb(:index)
	end

	get '/chatbot' do
		erb(:index3)
	end

	get '/chatbot2' do
		erb(:index4)
	end
end

HelloWorldApp.run!
