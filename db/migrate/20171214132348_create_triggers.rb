class CreateTriggers < ActiveRecord::Migration[5.1]
  def change
    create_table :triggers do |t|
      t.string :name
      t.integer :state

      t.timestamps
    end
  end
end
