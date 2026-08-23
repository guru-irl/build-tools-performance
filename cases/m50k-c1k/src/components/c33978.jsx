import React from 'react';
const LABEL_33978 = 'component_33978';
export function Component33978({ value = 33978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33978, 'data-value': derived.doubled }, children);
}
export default Component33978;
