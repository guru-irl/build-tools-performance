import React from 'react';
const LABEL_13110 = 'component_13110';
export function Component13110({ value = 13110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13110, 'data-value': derived.doubled }, children);
}
export default Component13110;
