class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @triggers = Trigger.all.order(:id)
    gon.triggers = @triggers.first(5)
  end

  def buttons

  end

  def test
    render json: @triggers
  end

  def test_mono
    render json: Trigger.first
  end

  def change_state
    @trigger = Trigger.find(params[:id])
    state = @trigger.state
    @trigger.state = (state == 0 ? 1 : 0)
    @trigger.save
    redirect_to root_path
  end

  private

  def set_triggers
    @triggers = Trigger.all.order(:id)
  end
end
