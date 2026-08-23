import React from 'react';
const LABEL_39374 = 'component_39374';
export function Component39374({ value = 39374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39374, 'data-value': derived.doubled }, children);
}
export default Component39374;
