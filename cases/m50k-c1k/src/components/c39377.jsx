import React from 'react';
const LABEL_39377 = 'component_39377';
export function Component39377({ value = 39377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39377, 'data-value': derived.doubled }, children);
}
export default Component39377;
