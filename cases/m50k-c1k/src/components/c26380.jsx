import React from 'react';
const LABEL_26380 = 'component_26380';
export function Component26380({ value = 26380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26380, 'data-value': derived.doubled }, children);
}
export default Component26380;
