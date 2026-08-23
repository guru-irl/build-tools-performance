import React from 'react';
const LABEL_14100 = 'component_14100';
export function Component14100({ value = 14100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14100, 'data-value': derived.doubled }, children);
}
export default Component14100;
