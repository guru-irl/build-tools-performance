import React from 'react';
const LABEL_9286 = 'component_9286';
export function Component9286({ value = 9286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9286, 'data-value': derived.doubled }, children);
}
export default Component9286;
