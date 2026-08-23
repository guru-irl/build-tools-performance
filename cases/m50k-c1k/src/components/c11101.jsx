import React from 'react';
const LABEL_11101 = 'component_11101';
export function Component11101({ value = 11101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11101, 'data-value': derived.doubled }, children);
}
export default Component11101;
