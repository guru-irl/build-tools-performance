import React from 'react';
const LABEL_39283 = 'component_39283';
export function Component39283({ value = 39283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39283, 'data-value': derived.doubled }, children);
}
export default Component39283;
