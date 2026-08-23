import React from 'react';
const LABEL_46147 = 'component_46147';
export function Component46147({ value = 46147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46147, 'data-value': derived.doubled }, children);
}
export default Component46147;
