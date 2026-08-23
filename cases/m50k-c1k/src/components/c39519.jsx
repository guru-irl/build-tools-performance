import React from 'react';
const LABEL_39519 = 'component_39519';
export function Component39519({ value = 39519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39519, 'data-value': derived.doubled }, children);
}
export default Component39519;
