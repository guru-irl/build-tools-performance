import React from 'react';
const LABEL_39599 = 'component_39599';
export function Component39599({ value = 39599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39599, 'data-value': derived.doubled }, children);
}
export default Component39599;
