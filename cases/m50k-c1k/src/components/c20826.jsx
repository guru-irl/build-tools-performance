import React from 'react';
const LABEL_20826 = 'component_20826';
export function Component20826({ value = 20826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20826, 'data-value': derived.doubled }, children);
}
export default Component20826;
