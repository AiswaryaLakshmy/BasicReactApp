class Api::V1::ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  # skip_before_action :verify_authenticity_token
  # acts_as_token_authentication_handler_for User

  # def current_user
  #   @user ||= User.find_by_authentication_token(request.headers['X-User-Token'])
  # end

  # def admin?
  #   if current_user.admin?
  #   else
  #     render json: {status: 400, message: "Access denied"}
  #   end
  # end
end
