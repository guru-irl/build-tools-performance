import React from 'react';
const LABEL_16334 = 'component_16334';
export function Component16334({ value = 16334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16334, 'data-value': derived.doubled }, children);
}
export default Component16334;
