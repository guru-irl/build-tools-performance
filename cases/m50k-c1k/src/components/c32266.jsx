import React from 'react';
const LABEL_32266 = 'component_32266';
export function Component32266({ value = 32266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32266, 'data-value': derived.doubled }, children);
}
export default Component32266;
