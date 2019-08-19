class DealStagesController < ApplicationController
  include Concerns::PipelineScopes 
  
  protected 

  def permitted_params
    pipeline_permit(:id, :name, :percent)
  end
end
