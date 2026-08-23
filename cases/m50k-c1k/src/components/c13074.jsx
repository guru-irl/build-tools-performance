import React from 'react';
const LABEL_13074 = 'component_13074';
export function Component13074({ value = 13074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13074, 'data-value': derived.doubled }, children);
}
export default Component13074;
