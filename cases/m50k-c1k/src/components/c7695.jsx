import React from 'react';
const LABEL_7695 = 'component_7695';
export function Component7695({ value = 7695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7695, 'data-value': derived.doubled }, children);
}
export default Component7695;
