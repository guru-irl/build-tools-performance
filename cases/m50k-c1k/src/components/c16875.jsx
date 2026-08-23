import React from 'react';
const LABEL_16875 = 'component_16875';
export function Component16875({ value = 16875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16875, 'data-value': derived.doubled }, children);
}
export default Component16875;
