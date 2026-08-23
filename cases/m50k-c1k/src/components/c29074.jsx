import React from 'react';
const LABEL_29074 = 'component_29074';
export function Component29074({ value = 29074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29074, 'data-value': derived.doubled }, children);
}
export default Component29074;
