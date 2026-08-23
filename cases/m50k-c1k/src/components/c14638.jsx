import React from 'react';
const LABEL_14638 = 'component_14638';
export function Component14638({ value = 14638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14638, 'data-value': derived.doubled }, children);
}
export default Component14638;
