import React from 'react';
const LABEL_23285 = 'component_23285';
export function Component23285({ value = 23285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23285, 'data-value': derived.doubled }, children);
}
export default Component23285;
