import React from 'react';
const LABEL_17377 = 'component_17377';
export function Component17377({ value = 17377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17377, 'data-value': derived.doubled }, children);
}
export default Component17377;
