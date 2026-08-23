import React from 'react';
const LABEL_5093 = 'component_5093';
export function Component5093({ value = 5093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5093, 'data-value': derived.doubled }, children);
}
export default Component5093;
