require 'rails_helper'

RSpec.describe DealsController, type: :controller, vcr: { record: :new_episodes } do
  
  describe 'GET index' do 
    let (:response) do
       VCR.use_cassette('deals') { get :index, params: { page: 1, per_page: 5 } }
    end
    
    let (:body) { JSON.parse(response.body, object_class: OpenStruct) }
    let (:pagination) { body.pagination }
    
    it 'should respond with 200' do
      expect(response.status).to eq 200
    end
    
    it 'should respond with 5 deal stages' do 
      expect(body.deals.size).to eq 5
    end
    
    it 'should include deal_stages' do 
      expect(body.deals.first.deal.deal_stage).to be_truthy
    end 
    
    it 'should respond with pagination' do 
      expect(pagination.per_page).to eq 5
    end 
  end
  
  describe 'GET show' do
    let (:deal_id) { 12807214 }
    let (:response) do
       VCR.use_cassette('deal') { get :show, params: { id: deal_id } }
    end
    
    let (:body) { JSON.parse(response.body, object_class: OpenStruct) }
    let (:deal) { body.deal }

    it 'should respond with 200' do
      expect(response.status).to eq 200
    end
    
    it 'should display a valid deal' do 
      expect(deal.id).to eq deal_id
    end
  end
end
