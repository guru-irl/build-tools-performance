import React from 'react';
const LABEL_35399 = 'component_35399';
export function Component35399({ value = 35399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35399, 'data-value': derived.doubled }, children);
}
export default Component35399;
