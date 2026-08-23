import React from 'react';
const LABEL_39181 = 'component_39181';
export function Component39181({ value = 39181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39181, 'data-value': derived.doubled }, children);
}
export default Component39181;
