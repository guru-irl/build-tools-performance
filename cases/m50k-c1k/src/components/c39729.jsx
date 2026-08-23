import React from 'react';
const LABEL_39729 = 'component_39729';
export function Component39729({ value = 39729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39729, 'data-value': derived.doubled }, children);
}
export default Component39729;
