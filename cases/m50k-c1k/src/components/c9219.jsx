import React from 'react';
const LABEL_9219 = 'component_9219';
export function Component9219({ value = 9219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9219, 'data-value': derived.doubled }, children);
}
export default Component9219;
