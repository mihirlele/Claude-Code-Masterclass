---
description: Create a UI component using TDD (Test-Driven Development)
allowed-tools: Read, Write, Glob, Edit, Bash(npm test:*), Bash (npx vitest:*)
argument-hint: "[Brief component description]"
---

## User Input

The user has provided information about the component to make: **$ARGUMENTS**

## Do this First

From the component information above, determine a PascalCase Component name (e.g: "a card showing user stats" -> `UserStatsCard`).

### 1. Write Tests First
Create `tests/components/[ComponentName].text.tsx with 2-3 simple tests:
- Test that the component renders
- Test key elements are present (roles, text)

Pattern:
```tsx
import {render, screen} from "@testing-library/react"
import { describe, it, expect} from "vitest"
import ComponentName from "@/components/ComponentName"

describe("ComponentName", () => {
    it("renders successfully", () => {
        render(<ComponentName />)
        // assertions
    })
})
```

### 2. Run tests (expect failure)

```bash
npm test tests/components/[ComponentName].text.tsx
```

### 3. Create Component
- `components/[ComponentName]/[ComponentName].tsx`
- `components/[ComponentName]/[ComponentName].module.css`
- `components/[ComponentName]/index.ts` -> `export {default} from './
[ComponentName]'`

Conventions: no semicolon, CSS modules, theme colors from global.css when needed.

### 4. Run tests (expect pass)

```bash
npm test tests/components/[ComponentName].text.tsx
```

### 5. Add to preview page

Update `app/(public)/preview/page.tsx` with a labeled section showing the component.

## Rules
- Keep tests minimal
- Only proceed when the current step passes
