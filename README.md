# Playwright QA Automation - UNIQLO

Automated end-to-end testing for UNIQLO Thailand website using Playwright Test framework.

## 📋 Project Overview

This project contains comprehensive E2E tests for testing UNIQLO Thailand's web application, including:
- Homepage validation
- User authentication (Login/Logout)
- Product search and navigation
- Shopping cart functionality
- Checkout flow

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
npx playwright install
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run tests in headed mode (see browser)
npm run test:headed

# Generate test code with codegen
npm run gencode:uniqlo

# View HTML report
npm run report
```

## 📁 Project Structure

```
qa-playwright/
├── tests/
│   ├── example.spec.ts          # Example tests
│   └── milk.spec.ts             # UNIQLO test cases
├── e2e/
│   └── example.spec.ts
├── playwright.config.ts         # Playwright configuration
├── package.json
└── README.md
```

## 🧪 Test Cases

### 1. **Homepage Validation** (`has title`)
- Navigate to UNIQLO homepage
- Verify page title
- Validate page heading

### 2. **Login Test** (`login test`)
- Navigate to UNIQLO website
- Accept cookies
- Enter email and password
- Verify successful login

## ⚙️ Configuration

Key settings in `playwright.config.ts`:

- **testDir**: `./tests` - Test files location
- **fullyParallel**: `true` - Run tests in parallel
- **reporter**: `html` - Generate HTML reports
- **screenshot**: `on` - Capture screenshots for all tests
- **video**: `retain-on-failure` - Record video for failed tests
- **trace**: `on-first-retry` - Collect traces for debugging

## 📊 Test Artifacts

Generated after test runs:

- **playwright-report/** - HTML test report with screenshots
- **test-results/** - Test videos and traces
- **snapshots/** - Visual snapshots (if applicable)

## 🔍 Debugging

```bash
# Debug mode - step through tests
npm run test:debug

# Trace viewer - analyze test execution
npx playwright show-trace test-results/trace.zip

# View HTML report
npm run report
```

## 🛠️ Technologies

- **Playwright** - Test automation framework
- **TypeScript** - Test code language
- **Node.js** - Runtime environment

## 📝 Test Data

**Test User:**
- Email: `mlearning1994@gmail.com`
- Password: `Milk2485`

## 🚢 CI/CD Integration

Tests are configured to run in CI environments with:
- Retry logic (2 retries on CI)
- Single worker (no parallelization on CI)
- Automatic report generation

## 📖 Documentation

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-test)

## 👤 Author

**Wasana Stae**
- Email: wasana.stae@gmail.com

## 📜 License

ISC
