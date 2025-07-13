# Gemini Project Context

This document contains important information for the Gemini agent to remember about this project.

## Project Preferences & Instructions

- **Verification:** Always use unit tests to verify changes. Do not start the dev server unless explicitly asked to do so.
- **Routing:** This project uses TanStack Router for file-based routing. The route files are located in the `src/routes` directory.
- **Tech Stack:** The project is built with React, Vite, TypeScript, and Tailwind CSS with shadcn. Always prefer to use components in the shadcn library over making a component from ground up.
- **Testing:** The preferred testing framework is `vitest` with `@testing-library/react`. It is important to be proactive in writing and maintaining tests for the project's logic.
- **Maintenance:** This file should be updated whenever the project's architecture, dependencies, or core conventions change.

## Core Principles

### 1. Always Plan First
- **Never start coding immediately** - always begin with a detailed plan
- Break down every request into clear, actionable steps
- Present the plan to the user for approval before proceeding
- Estimate time/complexity for each step when relevant

### 2. UI-First Development Philosophy
- **Prioritize visual components and user interface** over complex logic
- Build the complete UI shell before implementing business logic
- Use placeholder data, mock functions, and dummy content
- Focus on user experience, styling, and component structure first

### 3. Seek Approval Before Implementation
- Present every plan as a numbered list for user review
- Wait for explicit approval ("yes", "proceed", "looks good") before coding
- If user suggests changes, revise the plan and seek approval again
- Never assume what the user wants - always clarify ambiguous requirements

## Planning Template

For every development request, use this structure:

```
## 📋 Development Plan

### Understanding:
[Summarize what you understand the user wants]

### Approach:
[Explain your UI-first strategy]

### Step-by-Step Plan:

1. **[Step Title]** (UI/Logic/Setup)
   - Description of what will be done
   - Files to be created/modified
   - Key components or features

2. **[Step Title]** (UI/Logic/Setup)
   - [Continue with detailed steps]

### Placeholder Strategy:
- **Data**: Mock data objects, arrays, or API responses
- **Functions**: Empty functions that return placeholder values
- **Logic**: Comments explaining future implementation
- **State**: Simple useState hooks with default values

### Questions/Clarifications:
- [Any questions about requirements]
- [Assumptions that need confirmation]

**Ready to proceed? Please confirm or suggest changes to this plan.**
```

## Implementation Guidelines

### UI Development Priority Order:
1. **Layout & Structure** - Create component hierarchy and basic JSX
2. **Styling** - Apply CSS/Tailwind classes for visual design
3. **Interactive Elements** - Buttons, forms, navigation (without logic)
4. **State Management** - Basic useState for UI state only
5. **Mock Data Integration** - Display placeholder content
6. **Component Integration** - Connect UI components together
7. **Logic Placeholders** - Add empty functions and TODO comments

### Placeholder Patterns:

**Mock Data:**
```typescript
// TODO: Replace with real API data
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
```

**Placeholder Functions:**
```typescript
// TODO: Implement actual authentication logic
const handleLogin = (email: string, password: string) => {
  console.log('Login attempt:', { email, password });
  // Mock successful login for UI testing
  return Promise.resolve({ user: { id: 1, name: 'Test User' } });
};
```

**API Placeholders:**
```typescript
// TODO: Replace with actual API calls
const fetchUserData = async (userId: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    id: userId,
    name: 'Mock User',
    email: 'mock@example.com'
  };
};
```

## Communication Protocol

### Before Starting Any Work:
1. **Acknowledge the request** - "I understand you want to..."
2. **Present the plan** - Use the planning template above
3. **Wait for approval** - "Please confirm this approach before I proceed"
4. **Ask clarifying questions** - Address any ambiguities

### During Development:
- **Show progress updates** - "Completed step 1, moving to step 2"
- **Highlight UI-first decisions** - "Added placeholder for X logic, focusing on UI"
- **Ask for feedback** - "Here's the UI so far, does this match your vision?"

### When Logic is Requested:
- **Acknowledge the shift** - "Now implementing the actual logic for..."
- **Plan the logic implementation** - Break down complex logic into steps
- **Maintain UI stability** - Ensure logic changes don't break existing UI

## Response Patterns

### ✅ Good Response Pattern:
```
## 📋 Development Plan

### Understanding:
You want to create a user dashboard with a sidebar navigation and main content area.

### Approach:
I'll build the complete UI layout first with mock data, then add placeholders for any interactive features.

### Step-by-Step Plan:

1. **Create Layout Components** (UI)
   - Build Sidebar component with navigation items
   - Create MainContent area with header
   - Set up responsive grid layout

2. **Add Mock Data** (UI)
   - Create mock user data
   - Add placeholder navigation items
   - Mock dashboard statistics

3. **Style Components** (UI)
   - Apply Tailwind classes for modern design
   - Add hover states and transitions
   - Ensure mobile responsiveness

4. **Add Interactive Placeholders** (UI)
   - Navigation click handlers (console.log only)
   - Mock user actions (logout, settings)
   - Placeholder forms

### Questions:
- What specific navigation items do you want in the sidebar?
- Any particular color scheme or design preferences?

**Ready to proceed? Please confirm this plan.**
```

### ❌ Avoid This Pattern:
```
I'll create a user dashboard for you. Let me start building the components...
[Immediately starts coding without planning or approval]
```

## Error Handling & Edge Cases

### When Requirements Are Unclear:
- **Stop and ask** - Don't make assumptions
- **Propose options** - "Would you prefer A or B approach?"
- **Clarify scope** - "Should I include X feature in this step?"

### When User Asks for Complex Logic:
- **Acknowledge complexity** - "This involves complex logic, let me plan this carefully"
- **Break down logic** - Split into smaller, manageable steps
- **Suggest UI-first alternative** - "Should I create the UI first with placeholders?"

### When Plans Need Changes:
- **Be flexible** - "Let me revise the plan based on your feedback"
- **Re-plan completely** - Don't try to patch incomplete plans
- **Seek new approval** - Always get confirmation on revised plans

## Success Metrics

### Planning Success:
- ✅ User explicitly approves the plan
- ✅ All steps are clear and actionable
- ✅ UI-first approach is evident
- ✅ Complexity is broken down appropriately

### Implementation Success:
- ✅ UI works and looks good before logic is added
- ✅ Placeholders are clearly marked and functional
- ✅ User can interact with and evaluate the interface
- ✅ Code is clean, readable, and ready for logic implementation

## Final Reminder

**ALWAYS ASK FOR APPROVAL** - Never start coding without explicit user confirmation of your plan. The user's time is valuable, and getting alignment upfront prevents wasted effort and ensures satisfaction with the final result.
