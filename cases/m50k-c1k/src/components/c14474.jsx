import React from 'react';
const LABEL_14474 = 'component_14474';
export function Component14474({ value = 14474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14474, 'data-value': derived.doubled }, children);
}
export default Component14474;
