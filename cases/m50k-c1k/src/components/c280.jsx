import React from 'react';
const LABEL_280 = 'component_280';
export function Component280({ value = 280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_280, 'data-value': derived.doubled }, children);
}
export default Component280;
