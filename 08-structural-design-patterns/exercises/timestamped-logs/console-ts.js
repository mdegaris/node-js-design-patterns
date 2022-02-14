export function createTimestampedConsole(konsole) {
  return new Proxy(konsole, {
    // log, error, debug, info
    get: function (target, propertyKey, receiver) {
      if (["log", "error", "debug", "info"].includes(propertyKey)) {
        const consoleFunc = target[propertyKey];
        return function (...args) {
          const ts = new Date().toISOString();
          args.unshift(ts);
          return consoleFunc(...args);
        };
      } else {
        return target[propertyKey];
      }
    },
  });
}
