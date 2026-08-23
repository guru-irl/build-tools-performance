import React from 'react';
const LABEL_14329 = 'component_14329';
export function Component14329({ value = 14329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14329, 'data-value': derived.doubled }, children);
}
export default Component14329;
