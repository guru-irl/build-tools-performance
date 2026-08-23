import React from 'react';
const LABEL_28134 = 'component_28134';
export function Component28134({ value = 28134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28134, 'data-value': derived.doubled }, children);
}
export default Component28134;
