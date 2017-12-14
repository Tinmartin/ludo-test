Trigger.destroy_all

n = 1
5.times do
  Trigger.create!(
    name: "Trigger n°#{n}",
    state: rand(0..1)
  )
  n += 1
end
