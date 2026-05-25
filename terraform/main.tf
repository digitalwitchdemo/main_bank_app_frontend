resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "taj-banking-frontend-naomi"

  tags = {
    Name        = "TAJ Banking Frontend"
    Environment = "dev"
    Project     = "TAJ Banking"
  }
}