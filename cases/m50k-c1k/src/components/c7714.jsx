import React from 'react';
const LABEL_7714 = 'component_7714';
export function Component7714({ value = 7714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7714, 'data-value': derived.doubled }, children);
}
export default Component7714;
