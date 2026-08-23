import React from 'react';
const LABEL_24661 = 'component_24661';
export function Component24661({ value = 24661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24661, 'data-value': derived.doubled }, children);
}
export default Component24661;
