import React from 'react';
const LABEL_1266 = 'component_1266';
export function Component1266({ value = 1266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1266, 'data-value': derived.doubled }, children);
}
export default Component1266;
