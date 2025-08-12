# Contact-form
A single-file HTML contact form with CSS and JavaScript for client-side validation.

**Overview**
This repository contains one `index.html` file that implements a contact form with:
- Name, Email, and Message fields
- Client-side validation (required checks, length checks, email regex)
- Inline CSS for styling and inline JavaScript for validation and UX
- No backend — prevents actual submission (for demo / assignment purposes)

**Features**
- Single-file deliverable (easy to submit)
- Accessible: `aria-live` regions for error/success messages
- Practical email regex and basic input sanitisation (trim + checks)
- Live blur-validation for improved UX
- Clear visual feedback: inline error messages + success message

**Test cases (edge conditions to try)**
- Empty fields → error messages
- Invalid emails (e.g., `test@`, `@domain.com`) → email error
- Very short name or message → length validation errors
- Valid inputs → success message and form reset




