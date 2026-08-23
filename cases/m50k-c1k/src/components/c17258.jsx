import React from 'react';
const LABEL_17258 = 'component_17258';
export function Component17258({ value = 17258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17258, 'data-value': derived.doubled }, children);
}
export default Component17258;
