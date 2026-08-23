import React from 'react';
const LABEL_12399 = 'component_12399';
export function Component12399({ value = 12399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12399, 'data-value': derived.doubled }, children);
}
export default Component12399;
