require 'fileutils'

path = '../images/'
files = Dir.foreach(path) 

files.each do |file|
  if !File.directory?(file) then
    puts file
    File.delete(path+file)  
  end
end
