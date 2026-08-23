import React from 'react';
const LABEL_16018 = 'component_16018';
export function Component16018({ value = 16018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16018, 'data-value': derived.doubled }, children);
}
export default Component16018;
