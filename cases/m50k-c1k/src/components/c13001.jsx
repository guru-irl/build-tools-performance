import React from 'react';
const LABEL_13001 = 'component_13001';
export function Component13001({ value = 13001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13001, 'data-value': derived.doubled }, children);
}
export default Component13001;
