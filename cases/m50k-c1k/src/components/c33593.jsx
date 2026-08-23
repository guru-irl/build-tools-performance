import React from 'react';
const LABEL_33593 = 'component_33593';
export function Component33593({ value = 33593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33593, 'data-value': derived.doubled }, children);
}
export default Component33593;
