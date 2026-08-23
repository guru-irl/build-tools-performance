import React from 'react';
const LABEL_13240 = 'component_13240';
export function Component13240({ value = 13240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13240, 'data-value': derived.doubled }, children);
}
export default Component13240;
