resource "null_resource" "deploy_app" {
  provisioner "local-exec" {
    command = "docker-compose up -d"
  }
}