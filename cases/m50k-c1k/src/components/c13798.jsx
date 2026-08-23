import React from 'react';
const LABEL_13798 = 'component_13798';
export function Component13798({ value = 13798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13798, 'data-value': derived.doubled }, children);
}
export default Component13798;
