import React from 'react';
const LABEL_44750 = 'component_44750';
export function Component44750({ value = 44750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44750, 'data-value': derived.doubled }, children);
}
export default Component44750;
