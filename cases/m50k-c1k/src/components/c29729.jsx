import React from 'react';
const LABEL_29729 = 'component_29729';
export function Component29729({ value = 29729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29729, 'data-value': derived.doubled }, children);
}
export default Component29729;
