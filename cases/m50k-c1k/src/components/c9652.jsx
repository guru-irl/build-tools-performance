import React from 'react';
const LABEL_9652 = 'component_9652';
export function Component9652({ value = 9652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9652, 'data-value': derived.doubled }, children);
}
export default Component9652;
