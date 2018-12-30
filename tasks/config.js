let config = {
  src: {
    js: ['./*.js', './client/**/*.js', './server/**/*.js', './tasks/**/*.js', './tests/**/*.js'],
    tests: ['./tests/**/*.js'],
    main: 'Root.js'
  },

  dest: './build'
}

module.exports=config
