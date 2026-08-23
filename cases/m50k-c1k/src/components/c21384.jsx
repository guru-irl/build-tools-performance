import React from 'react';
const LABEL_21384 = 'component_21384';
export function Component21384({ value = 21384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21384, 'data-value': derived.doubled }, children);
}
export default Component21384;
