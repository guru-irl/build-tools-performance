import React from 'react';
const LABEL_36813 = 'component_36813';
export function Component36813({ value = 36813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36813, 'data-value': derived.doubled }, children);
}
export default Component36813;
