import React from 'react';
const LABEL_25919 = 'component_25919';
export function Component25919({ value = 25919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25919, 'data-value': derived.doubled }, children);
}
export default Component25919;
