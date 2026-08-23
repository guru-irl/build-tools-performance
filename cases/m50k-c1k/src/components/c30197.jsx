import React from 'react';
const LABEL_30197 = 'component_30197';
export function Component30197({ value = 30197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30197, 'data-value': derived.doubled }, children);
}
export default Component30197;
