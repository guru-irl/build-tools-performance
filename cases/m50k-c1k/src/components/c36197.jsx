import React from 'react';
const LABEL_36197 = 'component_36197';
export function Component36197({ value = 36197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36197, 'data-value': derived.doubled }, children);
}
export default Component36197;
