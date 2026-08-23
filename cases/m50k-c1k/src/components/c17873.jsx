import React from 'react';
const LABEL_17873 = 'component_17873';
export function Component17873({ value = 17873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17873, 'data-value': derived.doubled }, children);
}
export default Component17873;
