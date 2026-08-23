import React from 'react';
const LABEL_30256 = 'component_30256';
export function Component30256({ value = 30256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30256, 'data-value': derived.doubled }, children);
}
export default Component30256;
