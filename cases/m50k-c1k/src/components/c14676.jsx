import React from 'react';
const LABEL_14676 = 'component_14676';
export function Component14676({ value = 14676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14676, 'data-value': derived.doubled }, children);
}
export default Component14676;
