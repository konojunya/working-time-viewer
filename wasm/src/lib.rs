extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greeting() -> String {
  "I'm Rust!".to_string()
}