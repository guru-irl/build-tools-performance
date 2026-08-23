import React from 'react';
const LABEL_39745 = 'component_39745';
export function Component39745({ value = 39745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39745, 'data-value': derived.doubled }, children);
}
export default Component39745;
