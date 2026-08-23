import React from 'react';
const LABEL_29170 = 'component_29170';
export function Component29170({ value = 29170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29170, 'data-value': derived.doubled }, children);
}
export default Component29170;
