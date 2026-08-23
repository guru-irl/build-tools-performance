import React from 'react';
const LABEL_39813 = 'component_39813';
export function Component39813({ value = 39813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39813, 'data-value': derived.doubled }, children);
}
export default Component39813;
