import React from 'react';
const LABEL_14959 = 'component_14959';
export function Component14959({ value = 14959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14959, 'data-value': derived.doubled }, children);
}
export default Component14959;
