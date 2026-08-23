import React from 'react';
const LABEL_9464 = 'component_9464';
export function Component9464({ value = 9464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9464, 'data-value': derived.doubled }, children);
}
export default Component9464;
