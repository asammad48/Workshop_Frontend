# Frontend Architecture Rules

## Layering
UI (components/ui) -> Shared (components/) -> Feature (features/*) -> Pages (pages/*) -> App shell (app/*)

## Data flow (server)
Pages/Features never call fetch directly.
Use:
- Repository (src/api/repositories/*) for network access
- Hook (src/features/*/hooks) for react-query query/mutations
- UI components consume hook outputs

## Dialogs/Popups
- Generic modal host: `components/ui/Modal.tsx`
- Confirmation dialog: `components/ui/ConfirmDialog.tsx`
- Toast system: `components/ui/Toast.tsx`

Only open dialogs via helpers:
- `useUiStore.getState().openModal(...)`
- `confirm({...})`
- `toast.success(...)`

## Buttons
- Shared Button component in `components/ui/Button.tsx`
- Feature-specific buttons go in the feature folder and use shared Button under the hood.

## Forms
- Keep field components in `components/ui`
- Form composition in feature folder

