export declare const traceContext: {
    run: (traceId: string, spanId: string, callback: () => void) => void;
    getTraceId: () => string | undefined;
    getSpanId: () => string | undefined;
};
