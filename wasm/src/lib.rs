extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
mod calculator;

#[wasm_bindgen(js_name = calculateWorkingTime)]
pub fn calculate_working_time(dom_info: &str) -> String {
  calculator::calculate(dom_info)
}