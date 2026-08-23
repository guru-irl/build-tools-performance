import React from 'react';
const LABEL_2201 = 'component_2201';
export function Component2201({ value = 2201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2201, 'data-value': derived.doubled }, children);
}
export default Component2201;
