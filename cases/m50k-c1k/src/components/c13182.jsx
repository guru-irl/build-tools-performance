import React from 'react';
const LABEL_13182 = 'component_13182';
export function Component13182({ value = 13182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13182, 'data-value': derived.doubled }, children);
}
export default Component13182;
