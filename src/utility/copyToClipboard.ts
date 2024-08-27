export default function copyToClipboard(value: string | number) {

    navigator.clipboard.writeText(String(value))
}