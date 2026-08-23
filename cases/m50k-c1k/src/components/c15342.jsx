import React from 'react';
const LABEL_15342 = 'component_15342';
export function Component15342({ value = 15342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15342, 'data-value': derived.doubled }, children);
}
export default Component15342;
