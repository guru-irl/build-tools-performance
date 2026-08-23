import React from 'react';
const LABEL_13714 = 'component_13714';
export function Component13714({ value = 13714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13714, 'data-value': derived.doubled }, children);
}
export default Component13714;
