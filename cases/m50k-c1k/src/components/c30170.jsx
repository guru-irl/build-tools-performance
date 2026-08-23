import React from 'react';
const LABEL_30170 = 'component_30170';
export function Component30170({ value = 30170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30170, 'data-value': derived.doubled }, children);
}
export default Component30170;
