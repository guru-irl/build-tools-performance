import React from 'react';
const LABEL_17926 = 'component_17926';
export function Component17926({ value = 17926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17926, 'data-value': derived.doubled }, children);
}
export default Component17926;
