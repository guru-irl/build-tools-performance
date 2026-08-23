import React from 'react';
const LABEL_33154 = 'component_33154';
export function Component33154({ value = 33154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33154, 'data-value': derived.doubled }, children);
}
export default Component33154;
