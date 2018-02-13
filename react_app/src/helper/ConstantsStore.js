import React, { Component } from 'react';

class ConstantsStore extends React.Component {
    static isLoggedIn() {
      debugger
      if (localStorage.getItem('login')) {
        return true
      } else {
        return false
      }
    }
  }

export default ConstantsStore
