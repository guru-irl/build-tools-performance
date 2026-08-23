import React from 'react';
const LABEL_38151 = 'component_38151';
export function Component38151({ value = 38151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38151, 'data-value': derived.doubled }, children);
}
export default Component38151;
