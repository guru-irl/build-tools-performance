import React from 'react';
const LABEL_33933 = 'component_33933';
export function Component33933({ value = 33933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33933, 'data-value': derived.doubled }, children);
}
export default Component33933;
