import React from 'react';
const LABEL_13246 = 'component_13246';
export function Component13246({ value = 13246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13246, 'data-value': derived.doubled }, children);
}
export default Component13246;
