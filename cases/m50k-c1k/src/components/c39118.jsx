import React from 'react';
const LABEL_39118 = 'component_39118';
export function Component39118({ value = 39118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39118, 'data-value': derived.doubled }, children);
}
export default Component39118;
