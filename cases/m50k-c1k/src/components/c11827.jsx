import React from 'react';
const LABEL_11827 = 'component_11827';
export function Component11827({ value = 11827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11827, 'data-value': derived.doubled }, children);
}
export default Component11827;
