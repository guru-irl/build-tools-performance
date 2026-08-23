import React from 'react';
const LABEL_22577 = 'component_22577';
export function Component22577({ value = 22577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22577, 'data-value': derived.doubled }, children);
}
export default Component22577;
