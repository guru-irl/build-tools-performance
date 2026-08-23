import React from 'react';
const LABEL_12197 = 'component_12197';
export function Component12197({ value = 12197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12197, 'data-value': derived.doubled }, children);
}
export default Component12197;
