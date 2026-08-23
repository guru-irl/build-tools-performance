import React from 'react';
const LABEL_21399 = 'component_21399';
export function Component21399({ value = 21399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21399, 'data-value': derived.doubled }, children);
}
export default Component21399;
