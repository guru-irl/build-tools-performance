import React from 'react';
const LABEL_21460 = 'component_21460';
export function Component21460({ value = 21460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21460, 'data-value': derived.doubled }, children);
}
export default Component21460;
