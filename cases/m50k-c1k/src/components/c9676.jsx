import React from 'react';
const LABEL_9676 = 'component_9676';
export function Component9676({ value = 9676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9676, 'data-value': derived.doubled }, children);
}
export default Component9676;
