import React from 'react';
const LABEL_10771 = 'component_10771';
export function Component10771({ value = 10771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10771, 'data-value': derived.doubled }, children);
}
export default Component10771;
