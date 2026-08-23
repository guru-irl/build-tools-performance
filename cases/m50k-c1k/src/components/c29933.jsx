import React from 'react';
const LABEL_29933 = 'component_29933';
export function Component29933({ value = 29933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29933, 'data-value': derived.doubled }, children);
}
export default Component29933;
