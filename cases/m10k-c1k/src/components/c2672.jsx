import React from 'react';
const LABEL_2672 = 'component_2672';
export function Component2672({ value = 2672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2672, 'data-value': derived.doubled }, children);
}
export default Component2672;
