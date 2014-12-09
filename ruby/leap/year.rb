class Year
  def self.leap?(year)
    #
    # see if it / 4
    #
    # then check is /100
    #
    #   then check is / 400
    #
    # on every year that is evenly divisible by 4
    #   except every year that is evenly divisible by 100
    #     unless the year is also evenly divisible by 400
    # ```
     year %4 == 0 unless (year %100 == 0 unless year %400 == 0)


  end
end
