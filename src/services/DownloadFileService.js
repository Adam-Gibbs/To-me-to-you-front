import http from "../http-common";

class DownloadFileService {
  download(id, onDownloadProgress) {
    return http.get(`/download/${id}`, {
      responseType: "blob",
      onDownloadProgress,
    });
  }
}

export default new DownloadFileService();
