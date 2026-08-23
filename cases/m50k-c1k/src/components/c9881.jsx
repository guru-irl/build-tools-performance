import React from 'react';
const LABEL_9881 = 'component_9881';
export function Component9881({ value = 9881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9881, 'data-value': derived.doubled }, children);
}
export default Component9881;
