import React from 'react';
const LABEL_32099 = 'component_32099';
export function Component32099({ value = 32099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32099, 'data-value': derived.doubled }, children);
}
export default Component32099;
