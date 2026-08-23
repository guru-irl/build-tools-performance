import React from 'react';
const LABEL_39529 = 'component_39529';
export function Component39529({ value = 39529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39529, 'data-value': derived.doubled }, children);
}
export default Component39529;
