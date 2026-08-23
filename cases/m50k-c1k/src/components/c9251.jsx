import React from 'react';
const LABEL_9251 = 'component_9251';
export function Component9251({ value = 9251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9251, 'data-value': derived.doubled }, children);
}
export default Component9251;
