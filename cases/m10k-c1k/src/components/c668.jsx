import React from 'react';
const LABEL_668 = 'component_668';
export function Component668({ value = 668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_668, 'data-value': derived.doubled }, children);
}
export default Component668;
