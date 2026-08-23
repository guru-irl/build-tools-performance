import React from 'react';
const LABEL_13285 = 'component_13285';
export function Component13285({ value = 13285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13285, 'data-value': derived.doubled }, children);
}
export default Component13285;
