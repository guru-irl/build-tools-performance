import React from 'react';
const LABEL_9663 = 'component_9663';
export function Component9663({ value = 9663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9663, 'data-value': derived.doubled }, children);
}
export default Component9663;
