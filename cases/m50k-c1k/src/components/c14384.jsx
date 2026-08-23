import React from 'react';
const LABEL_14384 = 'component_14384';
export function Component14384({ value = 14384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14384, 'data-value': derived.doubled }, children);
}
export default Component14384;
