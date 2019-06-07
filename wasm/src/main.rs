use std::fs;

mod calculator;

fn read_file() -> String {
  let content = fs::read_to_string("test.html").unwrap_or("can not read".to_owned());
  content
}

fn main() {
  let dom = read_file();
  let working_time = calculator::calculate(&dom);
  println!("{}", working_time);
}