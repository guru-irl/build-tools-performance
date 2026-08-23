import React from 'react';
const LABEL_42079 = 'component_42079';
export function Component42079({ value = 42079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42079, 'data-value': derived.doubled }, children);
}
export default Component42079;
