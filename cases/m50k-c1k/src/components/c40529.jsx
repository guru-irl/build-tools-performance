import React from 'react';
const LABEL_40529 = 'component_40529';
export function Component40529({ value = 40529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40529, 'data-value': derived.doubled }, children);
}
export default Component40529;
