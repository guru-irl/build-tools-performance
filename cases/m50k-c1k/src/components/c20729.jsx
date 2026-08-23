import React from 'react';
const LABEL_20729 = 'component_20729';
export function Component20729({ value = 20729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20729, 'data-value': derived.doubled }, children);
}
export default Component20729;
