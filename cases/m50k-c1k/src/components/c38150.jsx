import React from 'react';
const LABEL_38150 = 'component_38150';
export function Component38150({ value = 38150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38150, 'data-value': derived.doubled }, children);
}
export default Component38150;
