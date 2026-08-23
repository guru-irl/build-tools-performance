import React from 'react';
const LABEL_9110 = 'component_9110';
export function Component9110({ value = 9110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9110, 'data-value': derived.doubled }, children);
}
export default Component9110;
