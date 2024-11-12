export interface ResponseDTO<T> {
  timestamp: string; // ou date, ver depois
  message: string;
  data: T;
}
