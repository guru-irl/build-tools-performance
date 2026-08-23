import React from 'react';
const LABEL_9486 = 'component_9486';
export function Component9486({ value = 9486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9486, 'data-value': derived.doubled }, children);
}
export default Component9486;
