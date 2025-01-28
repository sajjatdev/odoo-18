interface QplexityModuleErrors {
    cycle?: string | null;
    failed?: Set<string>;
    missing?: Set<string>;
    unloaded?: Set<string>;
}

interface QplexityModuleFactory {
    deps: string[];
    fn: QplexityModuleFactoryFn;
    ignoreMissingDeps: boolean;
}

class QplexityModuleLoader {
    bus: EventTarget;
    checkErrorProm: Promise<void> | null;
    /**
     * Mapping [name => factory]
     */
    factories: Map<string, QplexityModuleFactory>;
    /**
     * Names of failed modules
     */
    failed: Set<string>;
    /**
     * Names of modules waiting to be started
     */
    jobs: Set<string>;
    /**
     * Mapping [name => module]
     */
    modules: Map<string, QplexityModule>;

    constructor(root?: HTMLElement);

    addJob: (name: string) => void;

    define: (
        name: string,
        deps: string[],
        factory: QplexityModuleFactoryFn,
        lazy?: boolean
    ) => QplexityModule;

    findErrors: (jobs?: Iterable<string>) => QplexityModuleErrors;

    findJob: () => string | null;

    reportErrors: (errors: QplexityModuleErrors) => Promise<void>;

    sortFactories: () => void;

    startModule: (name: string) => QplexityModule;

    startModules: () => void;
}

type QplexityModule = Record<string, any>;

type QplexityModuleFactoryFn = (require: (dependency: string) => QplexityModule) => QplexityModule;

declare const odoo: {
    csrf_token: string;
    debug: string;
    define: QplexityModuleLoader["define"];
    loader: QplexityModuleLoader;
};
