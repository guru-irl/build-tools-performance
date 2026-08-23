import React from 'react';
const LABEL_23158 = 'component_23158';
export function Component23158({ value = 23158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23158, 'data-value': derived.doubled }, children);
}
export default Component23158;
