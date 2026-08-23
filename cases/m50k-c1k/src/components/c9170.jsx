import React from 'react';
const LABEL_9170 = 'component_9170';
export function Component9170({ value = 9170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9170, 'data-value': derived.doubled }, children);
}
export default Component9170;
