# Firebase Timestamp Errors Due to Clock Synchronization

This repository demonstrates a common but subtle bug in Firebase applications: errors caused by discrepancies between the client's system clock and the Firebase server's clock.  The example uses Javascript but the concept applies across different platforms and languages.

The `clockSyncBug.js` file shows how an out-of-sync clock can lead to write operations being rejected or other unexpected behavior.  The solution, in `clockSyncSolution.js`, demonstrates how to mitigate this issue by using server-side timestamps whenever possible.