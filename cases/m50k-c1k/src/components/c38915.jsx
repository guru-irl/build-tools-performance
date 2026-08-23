import React from 'react';
const LABEL_38915 = 'component_38915';
export function Component38915({ value = 38915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38915, 'data-value': derived.doubled }, children);
}
export default Component38915;
