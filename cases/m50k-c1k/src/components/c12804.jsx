import React from 'react';
const LABEL_12804 = 'component_12804';
export function Component12804({ value = 12804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12804, 'data-value': derived.doubled }, children);
}
export default Component12804;
