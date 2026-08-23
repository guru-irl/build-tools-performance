import React from 'react';
const LABEL_13957 = 'component_13957';
export function Component13957({ value = 13957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13957, 'data-value': derived.doubled }, children);
}
export default Component13957;
