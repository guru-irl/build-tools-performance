import React from 'react';
const LABEL_12803 = 'component_12803';
export function Component12803({ value = 12803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12803, 'data-value': derived.doubled }, children);
}
export default Component12803;
