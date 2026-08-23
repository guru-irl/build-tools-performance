import React from 'react';
const LABEL_44785 = 'component_44785';
export function Component44785({ value = 44785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44785, 'data-value': derived.doubled }, children);
}
export default Component44785;
