import React from 'react';
const LABEL_9896 = 'component_9896';
export function Component9896({ value = 9896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9896, 'data-value': derived.doubled }, children);
}
export default Component9896;
