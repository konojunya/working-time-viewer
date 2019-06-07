mod parser;
use std::collections::HashMap;
use serde_json;

pub fn calculate(dom: &str) -> String {
  let result: HashMap<String,i32> = parser::parse(dom);
  serde_json::to_string(&result).unwrap()
}
