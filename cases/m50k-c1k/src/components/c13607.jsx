import React from 'react';
const LABEL_13607 = 'component_13607';
export function Component13607({ value = 13607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13607, 'data-value': derived.doubled }, children);
}
export default Component13607;
