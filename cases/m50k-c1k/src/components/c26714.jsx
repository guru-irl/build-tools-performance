import React from 'react';
const LABEL_26714 = 'component_26714';
export function Component26714({ value = 26714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26714, 'data-value': derived.doubled }, children);
}
export default Component26714;
