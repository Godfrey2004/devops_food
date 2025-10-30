# Terraform configuration for WebTech App deployment
resource "null_resource" "deploy_webtech_app" {
  provisioner "local-exec" {
    command = "docker-compose up -d"
  }
  
  provisioner "local-exec" {
    when    = destroy
    command = "docker-compose down"
  }
}

# Output the application URL
output "application_url" {
  value = "http://localhost:3019"
}

output "jenkins_url" {
  value = "http://localhost:8080"
}