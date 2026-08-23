import React from 'react';
const LABEL_21231 = 'component_21231';
export function Component21231({ value = 21231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21231, 'data-value': derived.doubled }, children);
}
export default Component21231;
