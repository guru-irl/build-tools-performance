import React from 'react';
const LABEL_33007 = 'component_33007';
export function Component33007({ value = 33007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33007, 'data-value': derived.doubled }, children);
}
export default Component33007;
