import React from 'react';
const LABEL_13858 = 'component_13858';
export function Component13858({ value = 13858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13858, 'data-value': derived.doubled }, children);
}
export default Component13858;
