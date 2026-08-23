import React from 'react';
const LABEL_14552 = 'component_14552';
export function Component14552({ value = 14552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14552, 'data-value': derived.doubled }, children);
}
export default Component14552;
