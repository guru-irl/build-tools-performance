import React from 'react';
const LABEL_3227 = 'component_3227';
export function Component3227({ value = 3227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3227, 'data-value': derived.doubled }, children);
}
export default Component3227;
