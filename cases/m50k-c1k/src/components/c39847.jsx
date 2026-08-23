import React from 'react';
const LABEL_39847 = 'component_39847';
export function Component39847({ value = 39847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39847, 'data-value': derived.doubled }, children);
}
export default Component39847;
