import React from 'react';
const LABEL_39408 = 'component_39408';
export function Component39408({ value = 39408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39408, 'data-value': derived.doubled }, children);
}
export default Component39408;
