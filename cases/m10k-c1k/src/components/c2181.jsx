import React from 'react';
const LABEL_2181 = 'component_2181';
export function Component2181({ value = 2181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2181, 'data-value': derived.doubled }, children);
}
export default Component2181;
