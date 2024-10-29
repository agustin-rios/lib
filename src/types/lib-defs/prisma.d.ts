export {};

declare global {
  namespace PrismaJson {
    type RichTextContent = any; // Allows variable rich text data without strict typing
  }
}
