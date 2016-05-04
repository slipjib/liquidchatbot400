require 'sinatra/base'
require 'ruby_cowsay'
require 'faker'
require 'tilt/erb'

class HelloWorldApp < Sinatra::Base
	set :erb, layout: :'layout'
	set :static, true
	set :root, File.dirname(__FILE__)

	get '/' do
		erb(:index4)
	end

	get '/1' do
		erb(:index3)
	end
end

if __FILE__ == $0
	HelloWorldApp.run!
end
