import React from 'react';
const LABEL_2236 = 'component_2236';
export function Component2236({ value = 2236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2236, 'data-value': derived.doubled }, children);
}
export default Component2236;
