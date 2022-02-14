import { createTimestampedConsole } from "./console-ts.js";

const proxiedConsole = createTimestampedConsole(console);

proxiedConsole.log("log message");
proxiedConsole.info("info message", 1);
proxiedConsole.debug("debug message");
proxiedConsole.error("error message");
