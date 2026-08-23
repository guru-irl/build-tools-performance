import React from 'react';
const LABEL_18830 = 'component_18830';
export function Component18830({ value = 18830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18830, 'data-value': derived.doubled }, children);
}
export default Component18830;
