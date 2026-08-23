import React from 'react';
const LABEL_39455 = 'component_39455';
export function Component39455({ value = 39455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39455, 'data-value': derived.doubled }, children);
}
export default Component39455;
