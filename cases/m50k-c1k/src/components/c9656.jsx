import React from 'react';
const LABEL_9656 = 'component_9656';
export function Component9656({ value = 9656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9656, 'data-value': derived.doubled }, children);
}
export default Component9656;
