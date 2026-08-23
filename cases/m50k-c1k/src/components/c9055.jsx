import React from 'react';
const LABEL_9055 = 'component_9055';
export function Component9055({ value = 9055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9055, 'data-value': derived.doubled }, children);
}
export default Component9055;
