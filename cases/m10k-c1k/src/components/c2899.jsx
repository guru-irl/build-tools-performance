import React from 'react';
const LABEL_2899 = 'component_2899';
export function Component2899({ value = 2899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2899, 'data-value': derived.doubled }, children);
}
export default Component2899;
