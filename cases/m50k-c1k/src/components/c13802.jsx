import React from 'react';
const LABEL_13802 = 'component_13802';
export function Component13802({ value = 13802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13802, 'data-value': derived.doubled }, children);
}
export default Component13802;
