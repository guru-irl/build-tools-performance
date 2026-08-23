import React from 'react';
const LABEL_17236 = 'component_17236';
export function Component17236({ value = 17236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17236, 'data-value': derived.doubled }, children);
}
export default Component17236;
