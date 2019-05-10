module.exports = {
  
    "parser": "babel-eslint",
    "plugins": [
      "react"
    ],
    "rules": {
      "max-len": [1, 120, 2, {ignoreComments: true}],
      "semi": ["error", "never"],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "env": {
      "browser": true,
      "node": true
    },
    settings:{
      "react":{
        "version": "detect" 
      }
    }
  }

