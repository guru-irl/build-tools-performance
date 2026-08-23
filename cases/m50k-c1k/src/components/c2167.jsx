import React from 'react';
const LABEL_2167 = 'component_2167';
export function Component2167({ value = 2167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2167, 'data-value': derived.doubled }, children);
}
export default Component2167;
