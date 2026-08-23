import React from 'react';
const LABEL_22601 = 'component_22601';
export function Component22601({ value = 22601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22601, 'data-value': derived.doubled }, children);
}
export default Component22601;
