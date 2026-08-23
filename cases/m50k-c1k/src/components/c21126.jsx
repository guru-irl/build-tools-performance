import React from 'react';
const LABEL_21126 = 'component_21126';
export function Component21126({ value = 21126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21126, 'data-value': derived.doubled }, children);
}
export default Component21126;
