import React from 'react';
const LABEL_33559 = 'component_33559';
export function Component33559({ value = 33559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33559, 'data-value': derived.doubled }, children);
}
export default Component33559;
