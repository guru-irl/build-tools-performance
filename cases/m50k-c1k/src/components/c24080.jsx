import React from 'react';
const LABEL_24080 = 'component_24080';
export function Component24080({ value = 24080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24080, 'data-value': derived.doubled }, children);
}
export default Component24080;
