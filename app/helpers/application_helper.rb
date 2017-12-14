module ApplicationHelper
  def toast(text, color)
    # toaster helper
    "<div class='#{color}-text'>#{text}</div>"
  end
end
