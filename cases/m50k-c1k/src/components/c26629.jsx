import React from 'react';
const LABEL_26629 = 'component_26629';
export function Component26629({ value = 26629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26629, 'data-value': derived.doubled }, children);
}
export default Component26629;
