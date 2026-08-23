import React from 'react';
const LABEL_14399 = 'component_14399';
export function Component14399({ value = 14399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14399, 'data-value': derived.doubled }, children);
}
export default Component14399;
