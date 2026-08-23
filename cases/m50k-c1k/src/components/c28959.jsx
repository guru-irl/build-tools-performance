import React from 'react';
const LABEL_28959 = 'component_28959';
export function Component28959({ value = 28959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28959, 'data-value': derived.doubled }, children);
}
export default Component28959;
