output "cloudfront_url" {
  description = "CloudFront URL for the TAJ Banking frontend"
  value       = "https://${aws_cloudfront_distribution.frontend_cdn.domain_name}"
}