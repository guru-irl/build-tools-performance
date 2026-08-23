import React from 'react';
const LABEL_11695 = 'component_11695';
export function Component11695({ value = 11695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11695, 'data-value': derived.doubled }, children);
}
export default Component11695;
