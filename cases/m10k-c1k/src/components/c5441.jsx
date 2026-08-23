import React from 'react';
const LABEL_5441 = 'component_5441';
export function Component5441({ value = 5441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5441, 'data-value': derived.doubled }, children);
}
export default Component5441;
