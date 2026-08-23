import React from 'react';
const LABEL_15280 = 'component_15280';
export function Component15280({ value = 15280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15280, 'data-value': derived.doubled }, children);
}
export default Component15280;
