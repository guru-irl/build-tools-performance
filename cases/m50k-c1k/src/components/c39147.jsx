import React from 'react';
const LABEL_39147 = 'component_39147';
export function Component39147({ value = 39147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39147, 'data-value': derived.doubled }, children);
}
export default Component39147;
