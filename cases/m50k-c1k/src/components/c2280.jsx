import React from 'react';
const LABEL_2280 = 'component_2280';
export function Component2280({ value = 2280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2280, 'data-value': derived.doubled }, children);
}
export default Component2280;
