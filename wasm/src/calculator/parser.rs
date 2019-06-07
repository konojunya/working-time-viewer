extern crate regex;
use std::collections::HashMap;
use regex::Regex;

pub fn parse(dom: &str) -> HashMap<String,i32> {
  let re = Regex::new("(?P<time>\\d+)h.*</a|aria-label=\"Assigned\\sto\\s(?P<assignee>.*)\">").unwrap();

  let mut flg = true;
  let mut flatten = String::new();
  let mut result = HashMap::new();
  for cap in re.captures_iter(&dom) {
    if flg {
      flatten += &cap["time"];
      flatten += ":";
    } else {
      flatten += &cap["assignee"];
      flatten += ";";
    }
    flg = !flg;
  }
  let mut v: Vec<&str> = flatten.split(";").collect();
  v.swap_remove(v.len() - 1);
  for i in v {
    let s: Vec<&str> = i.split(":").collect();
    let assignee: String = s[1].to_string();
    let time: i32 = s[0].to_string().parse::<i32>().unwrap();

    if result.contains_key(&assignee) {
      let current = result[&assignee];
      result.insert(assignee, current + time);
    } else {
      result.insert(assignee, time);
    }
  }
  result
}