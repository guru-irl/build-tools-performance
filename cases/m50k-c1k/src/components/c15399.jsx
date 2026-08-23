import React from 'react';
const LABEL_15399 = 'component_15399';
export function Component15399({ value = 15399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15399, 'data-value': derived.doubled }, children);
}
export default Component15399;
