import React from 'react';
const LABEL_17430 = 'component_17430';
export function Component17430({ value = 17430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17430, 'data-value': derived.doubled }, children);
}
export default Component17430;
