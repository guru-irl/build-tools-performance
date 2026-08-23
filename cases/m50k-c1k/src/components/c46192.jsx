import React from 'react';
const LABEL_46192 = 'component_46192';
export function Component46192({ value = 46192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46192, 'data-value': derived.doubled }, children);
}
export default Component46192;
