import React from 'react';
const LABEL_39714 = 'component_39714';
export function Component39714({ value = 39714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39714, 'data-value': derived.doubled }, children);
}
export default Component39714;
