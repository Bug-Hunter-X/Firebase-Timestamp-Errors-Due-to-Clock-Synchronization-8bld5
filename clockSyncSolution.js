To reliably handle timestamps, always use Firebase's server timestamps.

Instead of:
```javascript
const newPost = {
  title: 'My Post',
  createdAt: new Date()
};
```
Use:
```javascript
const newPost = {
  title: 'My Post',
  createdAt: firebase.firestore.FieldValue.serverTimestamp()
};
```
This ensures that the timestamp is consistent across all clients and is not affected by differences in local clock accuracy.