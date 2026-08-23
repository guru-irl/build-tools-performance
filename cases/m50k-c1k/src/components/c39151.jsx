import React from 'react';
const LABEL_39151 = 'component_39151';
export function Component39151({ value = 39151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39151, 'data-value': derived.doubled }, children);
}
export default Component39151;
