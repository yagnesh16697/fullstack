# Short Polling

## Example Use Cases:

- **Notification Systems**: Real-time notification systems often encounter these issues due to the need for instant communication.
- **Cricinfo**: Live sports updates platforms like Cricinfo require real-time connections, facing similar challenges.
- **Analytics Platforms**: Real-time analytics platforms need to maintain connections for data streaming, which can be problematic.
- **Version Updates**: Systems that push real-time version updates to users may face issues related to connection stability and resource utilization.

## Connection Issues in Short Polling

## Issues:

- **Short-lived connection**: Connections in real-time systems are often short-lived, leading to frequent establishment and teardown of connections.
- **Lack of persistence in connections**: Connections do not persist over a long duration, requiring constant reestablishment.
- **Less resource utilization**: Due to the frequent establishment and teardown of connections, resources are underutilized.
- **Scaling problems**: Real-time systems face challenges in scaling due to the nature of their connections.
