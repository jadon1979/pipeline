module Concerns
  module PipelineScopes
    extend ActiveSupport::Concern

    included do
      def index 
        render json: { 
          "#{controller_name}": collection, 
          pagination: collection.pagination 
        }
      end
      
      def show 
        render json: resource
      end
      
      protected
      
      def collection
        @collection ||= pipeline_klass.find(:all, params: permitted_params)
      end 
      
      def resource 
        @resource ||= pipeline_klass.find(params[:id])
      end
      
      def pipeline_klass
        @klass_name ||= "PipelineDeals::#{controller_name.classify}".safe_constantize
      end
            
      def pipeline_permit(*param_list)
        params.permit(*param_list, :per_page, :page, :sort, conditions: {})
      end      
    end
  end
end
