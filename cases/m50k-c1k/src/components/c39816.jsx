import React from 'react';
const LABEL_39816 = 'component_39816';
export function Component39816({ value = 39816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39816, 'data-value': derived.doubled }, children);
}
export default Component39816;
