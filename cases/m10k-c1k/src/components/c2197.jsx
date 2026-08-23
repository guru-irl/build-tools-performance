import React from 'react';
const LABEL_2197 = 'component_2197';
export function Component2197({ value = 2197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2197, 'data-value': derived.doubled }, children);
}
export default Component2197;
