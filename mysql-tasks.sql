-- SPAZA STORIES
--Display all the product sales and their totals in descending order(highest value 1st)
select stock_item, sum(no_sold) 
	as sold_total 
		from purchase_table 
			group by stock_item
				order by sold_total desc;

				



--Display all products and their category names in order of category name asc
select product_name,category_name 
	from products join categories  
		on products.category_id = categories.category_id 
			order by category_name asc;


































