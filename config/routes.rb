Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'test', to: 'pages#test'
  get ':id/change_state', to: 'pages#change_state'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
