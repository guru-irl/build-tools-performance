import React from 'react';
const LABEL_42552 = 'component_42552';
export function Component42552({ value = 42552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42552, 'data-value': derived.doubled }, children);
}
export default Component42552;
