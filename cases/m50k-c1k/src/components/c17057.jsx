import React from 'react';
const LABEL_17057 = 'component_17057';
export function Component17057({ value = 17057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17057, 'data-value': derived.doubled }, children);
}
export default Component17057;
