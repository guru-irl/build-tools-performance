import React from 'react';
const LABEL_23842 = 'component_23842';
export function Component23842({ value = 23842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23842, 'data-value': derived.doubled }, children);
}
export default Component23842;
