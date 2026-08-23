import React from 'react';
const LABEL_36611 = 'component_36611';
export function Component36611({ value = 36611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36611, 'data-value': derived.doubled }, children);
}
export default Component36611;
