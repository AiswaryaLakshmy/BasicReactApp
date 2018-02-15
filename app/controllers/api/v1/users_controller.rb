class Api::V1::UsersController < Api::ApiController
  before_action :admin?, except: [:index]
  before_action :get_user

  def index
    @users = User.all
    render json: {status: 200, message: "User listing Success", user: @users}
  end

  def show
    render json: {status: 200, message: "Show user success", user: @user}
  end

  def update
    if @user.update_attributes(user_params)
      render json: {status: 200, message: "update Success", user: @user}
    else
      render json: {status: 400, message: "Error"}
    end
  end

  def destroy
    if @user.destroy
      render json: {status: 200, message: "Deletion Success", users: User.all}
    else
      render json: {status: 400, message: "Error"}
    end
  end

  private

  def get_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :contact, :role)
  end
end
