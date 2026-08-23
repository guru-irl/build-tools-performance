import React from 'react';
const LABEL_39079 = 'component_39079';
export function Component39079({ value = 39079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39079, 'data-value': derived.doubled }, children);
}
export default Component39079;
