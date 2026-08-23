import React from 'react';
const LABEL_18081 = 'component_18081';
export function Component18081({ value = 18081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18081, 'data-value': derived.doubled }, children);
}
export default Component18081;
