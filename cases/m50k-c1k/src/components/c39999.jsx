import React from 'react';
const LABEL_39999 = 'component_39999';
export function Component39999({ value = 39999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39999, 'data-value': derived.doubled }, children);
}
export default Component39999;
