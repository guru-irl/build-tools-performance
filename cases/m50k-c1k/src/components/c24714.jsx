import React from 'react';
const LABEL_24714 = 'component_24714';
export function Component24714({ value = 24714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24714, 'data-value': derived.doubled }, children);
}
export default Component24714;
