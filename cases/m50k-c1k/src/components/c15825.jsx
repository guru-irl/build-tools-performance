import React from 'react';
const LABEL_15825 = 'component_15825';
export function Component15825({ value = 15825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15825, 'data-value': derived.doubled }, children);
}
export default Component15825;
