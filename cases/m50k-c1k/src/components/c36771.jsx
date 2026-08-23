import React from 'react';
const LABEL_36771 = 'component_36771';
export function Component36771({ value = 36771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36771, 'data-value': derived.doubled }, children);
}
export default Component36771;
