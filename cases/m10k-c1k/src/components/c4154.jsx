import React from 'react';
const LABEL_4154 = 'component_4154';
export function Component4154({ value = 4154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4154, 'data-value': derived.doubled }, children);
}
export default Component4154;
