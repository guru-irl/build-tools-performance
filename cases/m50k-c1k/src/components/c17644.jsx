import React from 'react';
const LABEL_17644 = 'component_17644';
export function Component17644({ value = 17644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17644, 'data-value': derived.doubled }, children);
}
export default Component17644;
