import React from 'react';
const LABEL_40434 = 'component_40434';
export function Component40434({ value = 40434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40434, 'data-value': derived.doubled }, children);
}
export default Component40434;
