import React from 'react';
const LABEL_33055 = 'component_33055';
export function Component33055({ value = 33055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33055, 'data-value': derived.doubled }, children);
}
export default Component33055;
