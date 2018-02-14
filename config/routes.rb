Rails.application.routes.draw do
  scope 'api' do
    scope 'v1' do
      devise_for :users, controllers: {
        sessions: 'api/v1/users/sessions',
        registrations: 'api/v1/users/registrations'
      }
    end
  end
  namespace 'api' do
    namespace 'v1' do
      resources :users do
        member do
          post :update_user
        end
      end
    end
  end
end
