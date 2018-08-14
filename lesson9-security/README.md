# ACL

- Roles
- Resources
- Permissions

ngx-permissions


# JWT

- header
- payload
- signature

base64(header).base64(payload).H(base64(header), base64(payload), secret)


# XSS

Sanitization
- HTML
- Style
- URL
- Resource URL





# XSRF


BADSITE.COM POST(delete all users)   ->   YOUSITE.COM

CORS

cookies + header  => ( cookies ?= header )

"X-XSRF-TOKEN"

HttpClientXsrfModule.withOptions({
    cookieName: 'My-Xsrf-Cookie',
    headerName: 'My-Xsrf-Header',
}),


RFC6265
Same-site Cookies