import React from 'react';
const LABEL_23534 = 'component_23534';
export function Component23534({ value = 23534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23534, 'data-value': derived.doubled }, children);
}
export default Component23534;
