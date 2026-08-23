import React from 'react';
const LABEL_28178 = 'component_28178';
export function Component28178({ value = 28178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28178, 'data-value': derived.doubled }, children);
}
export default Component28178;
