import React from 'react';
const LABEL_8714 = 'component_8714';
export function Component8714({ value = 8714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8714, 'data-value': derived.doubled }, children);
}
export default Component8714;
