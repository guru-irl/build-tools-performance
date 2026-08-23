import React from 'react';
const LABEL_1399 = 'component_1399';
export function Component1399({ value = 1399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1399, 'data-value': derived.doubled }, children);
}
export default Component1399;
