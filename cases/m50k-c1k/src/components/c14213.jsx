import React from 'react';
const LABEL_14213 = 'component_14213';
export function Component14213({ value = 14213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14213, 'data-value': derived.doubled }, children);
}
export default Component14213;
