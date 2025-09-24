type Connection = {
    ip: string;
    name: string;
}
export function connection(info: Connection): boolean {
    console.log(`ip: ${info.ip}, name: ${info.name} Sucessfully connected!`);
    return true;

}

export function statusConnection(): void {
    console.log("The connection is active");
}