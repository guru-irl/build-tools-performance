import React from 'react';
const LABEL_9265 = 'component_9265';
export function Component9265({ value = 9265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9265, 'data-value': derived.doubled }, children);
}
export default Component9265;
