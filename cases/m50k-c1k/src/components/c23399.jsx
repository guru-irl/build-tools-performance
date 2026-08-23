import React from 'react';
const LABEL_23399 = 'component_23399';
export function Component23399({ value = 23399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23399, 'data-value': derived.doubled }, children);
}
export default Component23399;
