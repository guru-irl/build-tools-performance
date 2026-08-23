import React from 'react';
const LABEL_2371 = 'component_2371';
export function Component2371({ value = 2371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2371, 'data-value': derived.doubled }, children);
}
export default Component2371;
