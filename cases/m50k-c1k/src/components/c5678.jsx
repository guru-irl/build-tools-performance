import React from 'react';
const LABEL_5678 = 'component_5678';
export function Component5678({ value = 5678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5678, 'data-value': derived.doubled }, children);
}
export default Component5678;
