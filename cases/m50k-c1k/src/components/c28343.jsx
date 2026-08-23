import React from 'react';
const LABEL_28343 = 'component_28343';
export function Component28343({ value = 28343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28343, 'data-value': derived.doubled }, children);
}
export default Component28343;
