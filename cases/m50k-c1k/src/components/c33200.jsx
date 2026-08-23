import React from 'react';
const LABEL_33200 = 'component_33200';
export function Component33200({ value = 33200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33200, 'data-value': derived.doubled }, children);
}
export default Component33200;
