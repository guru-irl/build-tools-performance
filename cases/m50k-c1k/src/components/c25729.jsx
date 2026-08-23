import React from 'react';
const LABEL_25729 = 'component_25729';
export function Component25729({ value = 25729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25729, 'data-value': derived.doubled }, children);
}
export default Component25729;
