import React from 'react';
const LABEL_12729 = 'component_12729';
export function Component12729({ value = 12729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12729, 'data-value': derived.doubled }, children);
}
export default Component12729;
