import React from 'react';
const LABEL_39154 = 'component_39154';
export function Component39154({ value = 39154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39154, 'data-value': derived.doubled }, children);
}
export default Component39154;
