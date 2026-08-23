import React from 'react';
const LABEL_2380 = 'component_2380';
export function Component2380({ value = 2380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2380, 'data-value': derived.doubled }, children);
}
export default Component2380;
