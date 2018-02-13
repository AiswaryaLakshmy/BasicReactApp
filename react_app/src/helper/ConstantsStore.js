import React, { Component } from 'react';

class ConstantsStore extends React.Component {
    static isLoggedIn() {
      return localStorage.getItem('login') ? true : false;
    }
  }

export default ConstantsStore
