import React from 'react';
const LABEL_28222 = 'component_28222';
export function Component28222({ value = 28222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28222, 'data-value': derived.doubled }, children);
}
export default Component28222;
