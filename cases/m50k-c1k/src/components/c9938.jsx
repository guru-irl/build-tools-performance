import React from 'react';
const LABEL_9938 = 'component_9938';
export function Component9938({ value = 9938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9938, 'data-value': derived.doubled }, children);
}
export default Component9938;
