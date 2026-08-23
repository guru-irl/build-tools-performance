import React from 'react';
const LABEL_37369 = 'component_37369';
export function Component37369({ value = 37369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37369, 'data-value': derived.doubled }, children);
}
export default Component37369;
