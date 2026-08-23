import React from 'react';
const LABEL_9391 = 'component_9391';
export function Component9391({ value = 9391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9391, 'data-value': derived.doubled }, children);
}
export default Component9391;
