
export function monthAndDate(str: string) {
    return new Date(str)
        .toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
