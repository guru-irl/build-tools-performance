import React from 'react';
const LABEL_28147 = 'component_28147';
export function Component28147({ value = 28147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28147, 'data-value': derived.doubled }, children);
}
export default Component28147;
