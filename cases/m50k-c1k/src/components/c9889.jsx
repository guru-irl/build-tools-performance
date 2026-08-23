import React from 'react';
const LABEL_9889 = 'component_9889';
export function Component9889({ value = 9889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9889, 'data-value': derived.doubled }, children);
}
export default Component9889;
