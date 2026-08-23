import React from 'react';
const LABEL_12978 = 'component_12978';
export function Component12978({ value = 12978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12978, 'data-value': derived.doubled }, children);
}
export default Component12978;
