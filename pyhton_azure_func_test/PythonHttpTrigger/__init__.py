import logging

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    
    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()

        except ValueError:
            pass
        else:
            name = req_body.get('name')


    if name:
        if name.lower() == 'bertil':# or name == 'Bertil':
            return func.HttpResponse(f"Bertil is the man This is a tribute to {name}.")
        else:
            return func.HttpResponse(f"Hello, {name}. This HTTP triggered PYTHON function executed successfully.")
    else:
        return func.HttpResponse(
             "This HTTP triggered PYTHON function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )

    