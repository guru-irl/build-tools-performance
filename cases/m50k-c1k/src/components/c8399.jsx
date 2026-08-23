import React from 'react';
const LABEL_8399 = 'component_8399';
export function Component8399({ value = 8399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8399, 'data-value': derived.doubled }, children);
}
export default Component8399;
