import React from 'react';
const LABEL_5201 = 'component_5201';
export function Component5201({ value = 5201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5201, 'data-value': derived.doubled }, children);
}
export default Component5201;
