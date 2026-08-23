import React from 'react';
const LABEL_24382 = 'component_24382';
export function Component24382({ value = 24382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24382, 'data-value': derived.doubled }, children);
}
export default Component24382;
