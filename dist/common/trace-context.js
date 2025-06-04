"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceContext = void 0;
const async_hooks_1 = require("async_hooks");
const asyncLocalStorage = new async_hooks_1.AsyncLocalStorage();
exports.traceContext = {
    run: (traceId, spanId, callback) => {
        const store = new Map();
        store.set('trace_id', traceId);
        store.set('span_id', spanId);
        asyncLocalStorage.run(store, callback);
    },
    getTraceId: () => {
        const store = asyncLocalStorage.getStore();
        return store?.get('trace_id');
    },
    getSpanId: () => {
        const store = asyncLocalStorage.getStore();
        return store?.get('span_id');
    },
};
//# sourceMappingURL=trace-context.js.map