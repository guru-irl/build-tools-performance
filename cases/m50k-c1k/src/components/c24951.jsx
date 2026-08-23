import React from 'react';
const LABEL_24951 = 'component_24951';
export function Component24951({ value = 24951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24951, 'data-value': derived.doubled }, children);
}
export default Component24951;
