import React from 'react';
const LABEL_28696 = 'component_28696';
export function Component28696({ value = 28696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28696, 'data-value': derived.doubled }, children);
}
export default Component28696;
