import React from 'react';
const LABEL_39254 = 'component_39254';
export function Component39254({ value = 39254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39254, 'data-value': derived.doubled }, children);
}
export default Component39254;
