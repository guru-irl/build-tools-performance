import React from 'react';
const LABEL_39443 = 'component_39443';
export function Component39443({ value = 39443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39443, 'data-value': derived.doubled }, children);
}
export default Component39443;
