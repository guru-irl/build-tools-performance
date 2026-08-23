import React from 'react';
const LABEL_39040 = 'component_39040';
export function Component39040({ value = 39040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39040, 'data-value': derived.doubled }, children);
}
export default Component39040;
