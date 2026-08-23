import React from 'react';
const LABEL_8253 = 'component_8253';
export function Component8253({ value = 8253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8253, 'data-value': derived.doubled }, children);
}
export default Component8253;
