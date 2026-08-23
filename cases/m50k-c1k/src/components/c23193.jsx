import React from 'react';
const LABEL_23193 = 'component_23193';
export function Component23193({ value = 23193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23193, 'data-value': derived.doubled }, children);
}
export default Component23193;
