import React from 'react';
const LABEL_9450 = 'component_9450';
export function Component9450({ value = 9450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9450, 'data-value': derived.doubled }, children);
}
export default Component9450;
