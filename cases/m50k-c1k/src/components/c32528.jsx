import React from 'react';
const LABEL_32528 = 'component_32528';
export function Component32528({ value = 32528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32528, 'data-value': derived.doubled }, children);
}
export default Component32528;
