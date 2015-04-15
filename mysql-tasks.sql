-- understand this
insert into sales (on_date, day, product_id, quantity, sale_price)
	
	select  date, dayname(date) as day, product_id, no_sold, sales_price 
	from 	purchase_table pt, 
			products p 
	where pt.stock_item = p.product_name;

-- how to join tables...
select 
	category_name, 
	from sales, products, categories 
	where 
		???????

-- populate the suppliers table;

-- populate the purchases table

-- how to use group by - to aggregate to find - min / max / sum / count / avg

--group by

-- which Day got this most items sold



select * 
	from products join categories
	on products.product_id = categories.category_name


































