import React from 'react';
const LABEL_7426 = 'component_7426';
export function Component7426({ value = 7426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7426, 'data-value': derived.doubled }, children);
}
export default Component7426;
