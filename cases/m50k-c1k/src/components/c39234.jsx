import React from 'react';
const LABEL_39234 = 'component_39234';
export function Component39234({ value = 39234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39234, 'data-value': derived.doubled }, children);
}
export default Component39234;
