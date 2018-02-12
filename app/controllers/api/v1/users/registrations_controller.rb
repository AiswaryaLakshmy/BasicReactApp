class Api::V1::Users::RegistrationsController < Devise::RegistrationsController
  clear_respond_to
  respond_to :json

end
