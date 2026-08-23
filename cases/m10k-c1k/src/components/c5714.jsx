import React from 'react';
const LABEL_5714 = 'component_5714';
export function Component5714({ value = 5714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5714, 'data-value': derived.doubled }, children);
}
export default Component5714;
