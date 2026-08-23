import React from 'react';
const LABEL_9073 = 'component_9073';
export function Component9073({ value = 9073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9073, 'data-value': derived.doubled }, children);
}
export default Component9073;
