import React from 'react';
const LABEL_33280 = 'component_33280';
export function Component33280({ value = 33280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33280, 'data-value': derived.doubled }, children);
}
export default Component33280;
