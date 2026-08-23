import React from 'react';
const LABEL_12027 = 'component_12027';
export function Component12027({ value = 12027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12027, 'data-value': derived.doubled }, children);
}
export default Component12027;
