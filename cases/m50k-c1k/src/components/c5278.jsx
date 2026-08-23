import React from 'react';
const LABEL_5278 = 'component_5278';
export function Component5278({ value = 5278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5278, 'data-value': derived.doubled }, children);
}
export default Component5278;
