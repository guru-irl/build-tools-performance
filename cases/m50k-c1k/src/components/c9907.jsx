import React from 'react';
const LABEL_9907 = 'component_9907';
export function Component9907({ value = 9907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9907, 'data-value': derived.doubled }, children);
}
export default Component9907;
