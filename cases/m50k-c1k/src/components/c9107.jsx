import React from 'react';
const LABEL_9107 = 'component_9107';
export function Component9107({ value = 9107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9107, 'data-value': derived.doubled }, children);
}
export default Component9107;
