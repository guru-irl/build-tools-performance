import React from 'react';
const LABEL_39593 = 'component_39593';
export function Component39593({ value = 39593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39593, 'data-value': derived.doubled }, children);
}
export default Component39593;
