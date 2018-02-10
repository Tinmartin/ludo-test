Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'test', to: 'pages#test'
  get 'test_mono', to: 'pages#test_mono'
  get 'buttons', to: 'pages#buttons'
  get ':id/change_state', to: 'pages#change_state'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
