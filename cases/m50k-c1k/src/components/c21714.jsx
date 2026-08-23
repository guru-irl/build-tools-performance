import React from 'react';
const LABEL_21714 = 'component_21714';
export function Component21714({ value = 21714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21714, 'data-value': derived.doubled }, children);
}
export default Component21714;
