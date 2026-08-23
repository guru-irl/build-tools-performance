import React from 'react';
const LABEL_9440 = 'component_9440';
export function Component9440({ value = 9440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9440, 'data-value': derived.doubled }, children);
}
export default Component9440;
