import React from 'react';
const LABEL_43101 = 'component_43101';
export function Component43101({ value = 43101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43101, 'data-value': derived.doubled }, children);
}
export default Component43101;
