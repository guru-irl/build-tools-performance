import React from 'react';
const LABEL_29232 = 'component_29232';
export function Component29232({ value = 29232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29232, 'data-value': derived.doubled }, children);
}
export default Component29232;
