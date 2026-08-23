import React from 'react';
const LABEL_40617 = 'component_40617';
export function Component40617({ value = 40617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40617, 'data-value': derived.doubled }, children);
}
export default Component40617;
