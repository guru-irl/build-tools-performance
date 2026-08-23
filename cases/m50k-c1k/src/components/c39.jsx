import React from 'react';
const LABEL_39 = 'component_39';
export function Component39({ value = 39, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39, 'data-value': derived.doubled }, children);
}
export default Component39;
