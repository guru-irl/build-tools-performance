import React from 'react';
const LABEL_23532 = 'component_23532';
export function Component23532({ value = 23532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23532, 'data-value': derived.doubled }, children);
}
export default Component23532;
