import React from 'react';
const LABEL_9034 = 'component_9034';
export function Component9034({ value = 9034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9034, 'data-value': derived.doubled }, children);
}
export default Component9034;
