namespace my.bookshop;


entity author
{
  name: String;
  dob: Date;
  book: Association to many Books on book.author=$self;
}

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  author : Association to author;
}
entity Test : cuid, managed
{
  
}
entity Questions : cuid,managed
{
  
}
aspect Answers : cuid,managed
{

}