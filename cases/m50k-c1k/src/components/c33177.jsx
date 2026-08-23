import React from 'react';
const LABEL_33177 = 'component_33177';
export function Component33177({ value = 33177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33177, 'data-value': derived.doubled }, children);
}
export default Component33177;
