import React from 'react';
const LABEL_36337 = 'component_36337';
export function Component36337({ value = 36337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36337, 'data-value': derived.doubled }, children);
}
export default Component36337;
