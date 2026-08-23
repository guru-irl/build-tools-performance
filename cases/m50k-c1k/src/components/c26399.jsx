import React from 'react';
const LABEL_26399 = 'component_26399';
export function Component26399({ value = 26399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26399, 'data-value': derived.doubled }, children);
}
export default Component26399;
