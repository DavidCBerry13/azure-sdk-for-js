/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDigitalTwinsAPI } from "../azureDigitalTwinsAPI";
import {
  DigitalTwinModelsAddOptionalParams,
  DigitalTwinModelsAddResponse,
  DigitalTwinModelsListOptionalParams,
  DigitalTwinModelsListResponse,
  DigitalTwinModelsGetByIdOptionalParams,
  DigitalTwinModelsGetByIdResponse,
  DigitalTwinModelsUpdateOptionalParams,
  DigitalTwinModelsDeleteOptionalParams,
  DigitalTwinModelsListNextOptionalParams,
  DigitalTwinModelsListNextResponse
} from "../models";

/**
 * Class representing a DigitalTwinModels.
 */
export class DigitalTwinModels {
  private readonly client: AzureDigitalTwinsAPI;

  /**
   * Initialize a new instance of the class DigitalTwinModels class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDigitalTwinsAPI) {
    this.client = client;
  }

  /**
   * Uploads one or more models. When any error occurs, no models are uploaded.
   * Status codes:
   * * 201 Created
   * * 400 Bad Request
   *   * DTDLParserError - The models provided are not valid DTDL.
   *   * InvalidArgument - The model id is invalid.
   *   * LimitExceeded - The maximum number of model ids allowed in 'dependenciesFor' has been reached.
   *   * ModelVersionNotSupported - The version of DTDL used is not supported.
   * * 409 Conflict
   *   * ModelAlreadyExists - The model provided already exists.
   * @param options The options parameters.
   */
  add(
    options?: DigitalTwinModelsAddOptionalParams
  ): Promise<DigitalTwinModelsAddResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      addOperationSpec
    ) as Promise<DigitalTwinModelsAddResponse>;
  }

  /**
   * Retrieves model metadata and, optionally, model definitions.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The model id is invalid.
   *   * LimitExceeded - The maximum number of model ids allowed in 'dependenciesFor' has been reached.
   * * 404 Not Found
   *   * ModelNotFound - The model was not found.
   * @param options The options parameters.
   */
  list(
    options?: DigitalTwinModelsListOptionalParams
  ): Promise<DigitalTwinModelsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<DigitalTwinModelsListResponse>;
  }

  /**
   * Retrieves model metadata and optionally the model definition.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The model id is invalid.
   *   * MissingArgument - The model id was not provided.
   * * 404 Not Found
   *   * ModelNotFound - The model was not found.
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param options The options parameters.
   */
  getById(
    id: string,
    options?: DigitalTwinModelsGetByIdOptionalParams
  ): Promise<DigitalTwinModelsGetByIdResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { id, options: operationOptions },
      getByIdOperationSpec
    ) as Promise<DigitalTwinModelsGetByIdResponse>;
  }

  /**
   * Updates the metadata for a model.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The model id is invalid.
   *   * JsonPatchInvalid - The JSON Patch provided is invalid.
   *   * MissingArgument - The model id was not provided.
   * * 404 Not Found
   *   * ModelNotFound - The model was not found.
   * * 409 Conflict
   *   * ModelReferencesNotDecommissioned - The model refers to models that are not decommissioned.
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param updateModel An update specification described by JSON Patch. Only the decommissioned property
   *                    can be replaced.
   * @param options The options parameters.
   */
  update(
    id: string,
    updateModel: any[],
    options?: DigitalTwinModelsUpdateOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { id, updateModel, options: operationOptions },
      updateOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Deletes a model. A model can only be deleted if no other models reference it.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The model id is invalid.
   *   * MissingArgument - The model id was not provided.
   * * 404 Not Found
   *   * ModelNotFound - The model was not found.
   * * 409 Conflict
   *   * ModelReferencesNotDeleted - The model refers to models that are not deleted.
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param options The options parameters.
   */
  delete(
    id: string,
    options?: DigitalTwinModelsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { id, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: DigitalTwinModelsListNextOptionalParams
  ): Promise<DigitalTwinModelsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<DigitalTwinModelsListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const addOperationSpec: coreHttp.OperationSpec = {
  path: "/models",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "DigitalTwinsModelData" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.models,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.contentType,
    Parameters.traceparent,
    Parameters.tracestate
  ],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/models",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PagedDigitalTwinsModelDataCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.dependenciesFor,
    Parameters.includeModelDefinition
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.traceparent,
    Parameters.tracestate,
    Parameters.maxItemsPerPage
  ],
  serializer
};
const getByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/models/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsModelData
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.includeModelDefinition],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.traceparent, Parameters.tracestate],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path: "/models/{id}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.updateModel,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [
    Parameters.traceparent,
    Parameters.tracestate,
    Parameters.contentType1
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/models/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.traceparent, Parameters.tracestate],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PagedDigitalTwinsModelDataCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.dependenciesFor,
    Parameters.includeModelDefinition
  ],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [
    Parameters.traceparent,
    Parameters.tracestate,
    Parameters.maxItemsPerPage
  ],
  serializer
};
