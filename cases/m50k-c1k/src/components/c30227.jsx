import React from 'react';
const LABEL_30227 = 'component_30227';
export function Component30227({ value = 30227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30227, 'data-value': derived.doubled }, children);
}
export default Component30227;
