import React from 'react';
const LABEL_10474 = 'component_10474';
export function Component10474({ value = 10474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10474, 'data-value': derived.doubled }, children);
}
export default Component10474;
