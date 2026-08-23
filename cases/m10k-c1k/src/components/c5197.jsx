import React from 'react';
const LABEL_5197 = 'component_5197';
export function Component5197({ value = 5197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5197, 'data-value': derived.doubled }, children);
}
export default Component5197;
