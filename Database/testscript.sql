-- 3a
 SELECT  avg(accounts.balance), gender FROM nusmoney_db.accounts
   left join nusmoney_db.user on user.user_id=accounts.user_id group by gender;
 
 -- 3a 
 SELECT  avg(accounts.balance), age FROM nusmoney_db.accounts
   left join nusmoney_db.user on user.user_id=accounts.user_id group by age;
 
 -- 3b
  select  (transactions.amount),user.name FROM nusmoney_db.transactions 
  left join nusmoney_db.user on user.user_id=transactions.user_id ;
  select  avg(transactions.amount),user.name FROM nusmoney_db.transactions 
    left join nusmoney_db.user on user.user_id=transactions.user_id 
    where transactions. type= 'withdraw' group by user.name ;
  
   -- 3b

  select  user.user_id, user.name ,month(transactions.date),year(transactions.date) , avg(transactions.amount)
   FROM nusmoney_db.transactions  
   left join nusmoney_db.user on user.user_id=transactions.user_id 
   where transactions. type= 'withdraw' group by user.name, year(transactions.date) ,month(transactions.date)
   order by user.name,  year(transactions.date) ,month(transactions.date);
   
 
  -- 3c show all transaction and count
  select transactions.type,  count(transactions.type) FROM nusmoney_db.transactions 
   group by transactions.type 
   order by count(transactions.type) desc;
  
-- 3c only show the max transaction type and count
 select transactions.type, count(transactions.type) from nusmoney_db.transactions 
   where transactions.type=
  (select max(transactions.type) from nusmoney_db.transactions);
 
 
  

 
-- 3d
  Select * , accounts.balance  from nusmoney_db.user 
   left join nusmoney_db.accounts on user.user_id=accounts.user_id 
   where user.user_id =
   ( Select accounts.user_id FROM nusmoney_db.accounts where  accounts.balance=
    (select max(accounts.balance) from nusmoney_db.accounts ));


-- 3d  vervion 1 
--   Select * , accounts.balance  from nusmoney_db.user 
 --  left join nusmoney_db.accounts on user.user_id=accounts.user_id 
  -- where user.user_id =
 -- ( Select accounts.user_id FROM nusmoney_db.accounts where  accounts.balance=
 --  (select min(accounts.balance) from nusmoney_db.accounts ) );
 
 -- 3d version 2
  Select * from nusmoney_db.user 
  where user.user_id =
  ( Select accounts.user_id FROM nusmoney_db.accounts where  accounts.balance=
(select max(accounts.balance) from nusmoney_db.accounts ) );

  Select * from nusmoney_db.user 
  where user.user_id =
  ( Select accounts.user_id FROM nusmoney_db.accounts where  accounts.balance=
  (select min(accounts.balance) from nusmoney_db.accounts ) );

 
 -- 4 table to user who made most transaction for each month
   select transactions.user_id,  count( transactions.user_id),month(transactions.date),year (transactions.date) 
   from nusmoney_db.transactions
   group by (transactions.user_id),month(transactions.date),year (transactions.date)
    order by year (transactions.date),month(transactions.date), count( transactions.user_id) desc ;
  
   