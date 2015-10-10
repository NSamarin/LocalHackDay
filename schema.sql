drop table if exists courses;
create table courses (
  id integer primary key autoincrement,
  title text not null,
  semester integer not NULL
)