import React from 'react';
const LABEL_8919 = 'component_8919';
export function Component8919({ value = 8919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8919, 'data-value': derived.doubled }, children);
}
export default Component8919;
