import React from 'react';
const LABEL_40957 = 'component_40957';
export function Component40957({ value = 40957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40957, 'data-value': derived.doubled }, children);
}
export default Component40957;
