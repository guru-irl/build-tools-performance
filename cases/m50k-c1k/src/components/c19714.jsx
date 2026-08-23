import React from 'react';
const LABEL_19714 = 'component_19714';
export function Component19714({ value = 19714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19714, 'data-value': derived.doubled }, children);
}
export default Component19714;
