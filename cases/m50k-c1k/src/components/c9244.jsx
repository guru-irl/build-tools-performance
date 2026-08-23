import React from 'react';
const LABEL_9244 = 'component_9244';
export function Component9244({ value = 9244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9244, 'data-value': derived.doubled }, children);
}
export default Component9244;
