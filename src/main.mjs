import TracManager from "./TracManager.mjs";

// example call if used without rest or websockets
//console.log( await tracCore.tapProtocol.getHolders( 'dmt-nat', 111, 111) );
async function startServer() {
    try {
        let tracCore = new TracManager();
        await tracCore.initReader();
        
        // Handle process shutdown gracefully
        process.on('SIGINT', async () => {
            await tracCore.cleanup(); // You'll need to implement this method in TracManager
            process.exit(0);
        });
        
        // example call if used without rest or websockets
        //console.log( await tracCore.tapProtocol.getHolders( 'dmt-nat', 111, 111) );
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();