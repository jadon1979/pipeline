Rails.application.routes.draw do
  
  resources :deals, only: [:index, :show]
  resources :deal_stages, only: [:index, :show]
end
