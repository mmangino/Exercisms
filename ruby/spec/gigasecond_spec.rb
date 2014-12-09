require './gigasecond/gigasecond'

describe 'gigasecond' do


    it 'can click on a category and see items' do
      visit '/'
      click_on("men")
      click_on("Mens Pants")
      expect(page).to have_content("Mens Pants")
    end

end
