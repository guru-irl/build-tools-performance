import React from 'react';
const LABEL_26696 = 'component_26696';
export function Component26696({ value = 26696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26696, 'data-value': derived.doubled }, children);
}
export default Component26696;
