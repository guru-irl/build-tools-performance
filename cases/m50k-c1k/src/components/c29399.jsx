import React from 'react';
const LABEL_29399 = 'component_29399';
export function Component29399({ value = 29399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29399, 'data-value': derived.doubled }, children);
}
export default Component29399;
