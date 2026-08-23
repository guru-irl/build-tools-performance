import React from 'react';
const LABEL_17167 = 'component_17167';
export function Component17167({ value = 17167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17167, 'data-value': derived.doubled }, children);
}
export default Component17167;
