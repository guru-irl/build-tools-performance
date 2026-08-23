import React from 'react';
const LABEL_36399 = 'component_36399';
export function Component36399({ value = 36399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36399, 'data-value': derived.doubled }, children);
}
export default Component36399;
