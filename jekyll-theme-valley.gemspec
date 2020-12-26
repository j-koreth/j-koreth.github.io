# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-valley"
  spec.version       = "0.1.0"
  spec.authors       = ["Joel Koreth"]
  spec.email         = ["joelsymon@gmail.com"]

  spec.summary       = "A Jekyll Theme for Programmers that includes Blogs and a Portfolio"
  spec.homepage      = "https://github.com/j-koreth/jekyll-theme-valley"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
