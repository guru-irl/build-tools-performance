import React from 'react';
const LABEL_7985 = 'component_7985';
export function Component7985({ value = 7985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7985, 'data-value': derived.doubled }, children);
}
export default Component7985;
