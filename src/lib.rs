extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[wasm_bindgen(js_name = calculateWorkingTime)]
pub fn calculate_working_time(dom_str: &str) -> JsValue {
  JsValue::from_str(dom_str)
}
