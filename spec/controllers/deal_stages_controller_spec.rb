require 'rails_helper'

RSpec.describe DealStagesController, type: :controller, vcr: { record: :new_episodes } do

  describe 'GET index' do 
    let (:response) do
       VCR.use_cassette('deal_stages') { get :index, params: { page: 1, per_page: 5 } }
    end

    let (:body) { JSON.parse(response.body, object_class: OpenStruct) }
    let (:pagination) { body.pagination }

    it 'should respond with 200' do
      expect(response.status).to eq 200
    end

    it 'should respond with 5 deal stages' do 
      expect(body.deal_stages.size).to eq 5
    end

    it 'should respond with pagination' do 
      expect(pagination.per_page).to eq 5
    end 
  end

  describe 'GET show' do    
    let (:deal_stage_id) { 727375 }
    let (:response) do
       VCR.use_cassette('deal_stage') { get :show, params: { id: deal_stage_id } }
    end

    let (:body) { JSON.parse(response.body, object_class: OpenStruct) }
    let (:deal_stage) { body.deal_stage }

    it 'should respond with 200' do
      expect(response.status).to eq 200
    end

    it 'should display a valid deal' do 
      expect(deal_stage.id).to eq deal_stage_id
    end
  end
end
