import React from 'react';
const LABEL_33718 = 'component_33718';
export function Component33718({ value = 33718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33718, 'data-value': derived.doubled }, children);
}
export default Component33718;
