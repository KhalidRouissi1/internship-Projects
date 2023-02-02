# run python3 -m uvicorn main:app --reload

from fastapi.responses import JSONResponse
from fastapi import FastAPI, Query
import json

app = FastAPI()


@app.get("/periodicTab")
async def get_element(element_symbol: str = Query(None)):
    # Read and muaniplate the file
    with open("periodicTable.json") as f:
        periodic_table = json.load(f)
        if element_symbol and element_symbol in periodic_table:
            return periodic_table[element_symbol]
        elif element_symbol:
            return {"error": "Element not found"}
        else:
            return periodic_table


@app.get("/caloriesTab")
async def get_element(element_symbol: str = Query(None)):
    # Read and muaniplate the file
    with open("calories.json") as f:
        calories_table = json.load(f)
        if element_symbol and element_symbol in calories_table:
            return calories_table[element_symbol]
        elif element_symbol:
            return {"error": "Element not found"}
        else:
            return calories_table


# To fix "CORS policy: No 'Access-Control-Allow-Origin'error"


@app.middleware("http")
async def add_cors_headers(request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response
