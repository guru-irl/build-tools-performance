import React from 'react';
const LABEL_399 = 'component_399';
export function Component399({ value = 399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_399, 'data-value': derived.doubled }, children);
}
export default Component399;
