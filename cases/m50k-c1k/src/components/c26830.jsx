import React from 'react';
const LABEL_26830 = 'component_26830';
export function Component26830({ value = 26830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26830, 'data-value': derived.doubled }, children);
}
export default Component26830;
