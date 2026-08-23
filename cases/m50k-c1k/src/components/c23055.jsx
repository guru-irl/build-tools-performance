import React from 'react';
const LABEL_23055 = 'component_23055';
export function Component23055({ value = 23055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23055, 'data-value': derived.doubled }, children);
}
export default Component23055;
