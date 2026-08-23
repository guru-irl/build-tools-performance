import React from 'react';
const LABEL_33285 = 'component_33285';
export function Component33285({ value = 33285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33285, 'data-value': derived.doubled }, children);
}
export default Component33285;
