import { request } from "./request";

export function getCatalogs() {
    return request({
        url: '/goodbook/catalog',
        params: {
            //506fbf41a2351856032c8a8290e44316
            //258a429d9e85c4e65023b35169015b26
            key:'506fbf41a2351856032c8a8290e44316'
        }
    })
}

export function getBooks(catalog_id,pn,rn) {
    return request({
        url: '/goodbook/query',
        params: {
            //506fbf41a2351856032c8a8290e44316
            //258a429d9e85c4e65023b35169015b26
            key:'506fbf41a2351856032c8a8290e44316',
            catalog_id:catalog_id,
            pn:pn,
            rn,rn
        }
    })
}