import React from 'react';
const LABEL_9152 = 'component_9152';
export function Component9152({ value = 9152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9152, 'data-value': derived.doubled }, children);
}
export default Component9152;
